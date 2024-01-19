import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHeader } from './useHeader';
import { Address } from '../types/Address';

interface BuyForm {
    firstName: string,
    lastName?: string,
    title?: string,
    bithday?: string,
    email: string[],
    phone: string[],
    website?: string[],
    address: Address[],
    message?: string,
    [key: string]: string | string[] | Address[] | undefined,
}

export default function useBuyForm() {
    const { isDarkMode } = useHeader() || {};

    const [buyForm, setBuyForm] = useState<BuyForm>({
        firstName: '',
        lastName: '',
        title: '',
        bithday: '',
        email: [],
        phone: [],
        website: [],
        address: [{
            streetAddress: '',
            appartmentNumber: '',
            city: '',
            state: '',
            zip: '',
            country: '',
        }],
        message: '',
    });

    const [errors, setErrors] = useState<BuyForm>({
        firstName: '',
        lastName: '',
        title: '',
        bithday: '',
        email: [],
        phone: [],
        website: [],
        address: [],
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBuyForm({...buyForm, [name]: value});
        setErrors({...errors, [name]: ''});
    };

    const telegramBotToken = import.meta.env.VITE_REACT_APP_TELEGRAM_BOT_BUY_TOKEN;
    const chatId = import.meta.env.VITE_REACT_APP_TELEGRAM_BOT_BUY_CHAT_ID;

    const sendBuyMessage = async () => {
        const formattedMessage = formatMessage();
        
        try {
            if (!verifyForm()) {
                toast.error('Please fill in all required fields', {
                    position: 'top-left',
                    autoClose: 2000,
                    hideProgressBar: false,
                    pauseOnHover: false,
                    draggable: true,
                    style: {
                        color: '#f76f6f',
                        backgroundColor: (isDarkMode ? '#1E2A36' : '#275682')
                    }
                });
                return;
            }

            await axios.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                chat_id: chatId,
                text: formattedMessage,
            });

            toast.success('Sent successfully', {
                position: 'top-left',
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                style: {
                    color: '#00C9A1',
                    backgroundColor: (isDarkMode ? '#1E2A36' : '#536b82')
                }
            });
            
            resetValues();

        } catch (error) {
            console.error(error);
        }
    };

    const verifyForm = () => {
        let isValid = true;

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const phoneRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;

        const updatedErrors: BuyForm = {
            firstName: errors.firstName,
            lastName: errors.lastName,
            email: errors.email,
            phone: errors.phone,
            address: errors.address,
        };

        if (buyForm.firstName.trim() === '') {
            updatedErrors.firstName = 'First name is required';
            isValid = false;
        } else {
            updatedErrors.firstName = '';
        }

        if (buyForm.email.length > 0) {
            let count = 0;
            buyForm.email.forEach((email) => {
                if (!emailRegex.test(email)) {
                    updatedErrors.email[count] = 'Email is invalid';
                    isValid = false;
                } else {
                    updatedErrors.email[count] = '';
                }
                count++;
            });
        }

        if (buyForm.phone.length > 0) {
            let count = 0;
            buyForm.phone.forEach((phone) => {
                if (!phoneRegex.test(phone)) {
                    updatedErrors.phone[count] = 'Phone is invalid';
                    isValid = false;
                } else {
                    updatedErrors.phone[count] = '';
                }
                count++;
            });
        } 

        setErrors(updatedErrors);

        return isValid;
    }

    const formatMessage = () => {
        
    }

    const resetValues: () => void = () => {
        setBuyForm({
            firstName: '',
            lastName: '',
            title: '',
            bithday: '',
            email: [],
            phone: [],
            website: [],
            address: [],
            message: '',
        });
    }

    return {
        buyForm,
        handleChange,
        sendBuyMessage,
        errors
    };
}

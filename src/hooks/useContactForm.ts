import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHeader } from './useHeader';

interface ContactForm {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string,
    [key: string]: string
}

export default function useContactForm() {
    const { isDarkMode } = useHeader() || {};

    const [contactForm, setContactForm] = useState<ContactForm>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState<ContactForm>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactForm({...contactForm, [name]: value});
        setErrors({...errors, [name]: ''});
    };

    const telegramBotToken = import.meta.env.VITE_REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_REACT_APP_TELEGRAM_CHAT_ID;

    const sendContactMessage = async () => {
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

        const updatedErrors = {
            firstName: errors.firstName,
            lastName: errors.lastName,
            email: errors.email,
            phone: errors.phone,
            message: errors.message,
        };

        if (contactForm.firstName.trim() === '') {
            updatedErrors.firstName = 'First name is required';
            isValid = false;
        } else {
            updatedErrors.firstName = '';
        }

        if (contactForm.lastName.trim() === '') {
            updatedErrors.lastName = 'Last name is required';
            isValid = false;
        } else {
            updatedErrors.lastName = '';
        }

        if (!emailRegex.test(contactForm.email)) {
            updatedErrors.email = 'Email is invalid';
            isValid = false;
        } else {
            updatedErrors.email = '';
        }

        if (contactForm.phone && !phoneRegex.test(contactForm.phone)) {
            updatedErrors.phone = 'Phone is invalid. Format: +1234567890';
            isValid = false;
        } else {
            updatedErrors.phone = '';
        }

        if (contactForm.message.trim() === '') {
            updatedErrors.message = 'Message is required';
            isValid = false;  
        } else {
            updatedErrors.message = '';
        }

        setErrors(updatedErrors);

        return isValid;
    }

    const formatMessage : () => string = () => {
        return `Contact:
            \n${contactForm.message}
            \nFirst name  :  ${contactForm.firstName}\nLast name  :  ${contactForm.lastName}\n\nEmail  :  ${contactForm.email}\nPhone  :  ${contactForm.phone}`;
    }

    const resetValues: () => void = () => {
        setContactForm({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    }

    return {
        contactForm,
        errors,
        handleChange,
        sendContactMessage
    };
}

import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContactForm {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string,
}

export default function useContactForm() {
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
        console.log('handle change', name);
        setContactForm({...contactForm, [name]: value});
    };

    const telegramBotToken = import.meta.env.VITE_REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_REACT_APP_TELEGRAM_CHAT_ID;

    const sendContactMessage = async () => {
        const formattedMessage = formatMessage();
        try {
            console.log(formattedMessage);

            if (!verifyForm()) return;

            await axios.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                chat_id: chatId,
                text: formattedMessage,
            });
            toast('Test', {
                position: 'top-left',
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: false,
                draggable: true,
                style: {
                    backgroundColor: '#FFF689'
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

        if (contactForm.phone.trim() === '') {
            updatedErrors.phone = 'Phone is required';
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
        return `${contactForm.message}
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

import { useState } from 'react';
import axios from 'axios';

export default function useContactForm() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const telegramBotToken = import.meta.env.VITE_REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_REACT_APP_TELEGRAM_CHAT_ID;

    const sendContactMessage = async () => {
        const formattedMessage = formatMessage();
        try {
            console.log(formattedMessage);
            await axios.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                chat_id: chatId,
                text: formattedMessage,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const formatMessage : () => string = () => {
        return `First name  :  ${firstName}
              \nLast name  :  ${lastName}
              \nEmail  :  ${email}
              \nPhone  :  ${phone}
              \nMessage  :  ${message}`;
    }

    return {
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        setMessage,
        sendContactMessage
    };
}
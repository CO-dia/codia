import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            //await axios.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
              //  chat_id: chatId,
                //text: formattedMessage,
            //});
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

    const formatMessage : () => string = () => {
        return `${message}
            \nFirst name  :  ${firstName}\nLast name  :  ${lastName}\n\nEmail  :  ${email}\nPhone  :  ${phone}`;
    }

    const resetValues: () => void = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    return {
        firstName,
        lastName,
        email,
        phone,
        message,
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        setMessage,
        sendContactMessage
    };
}

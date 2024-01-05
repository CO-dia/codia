import { CSSProperties, useEffect } from "react";
import CustomInput from "../customs/CustomInput";
import SendButton from "./SendButton";
import { useHeader } from "../../hooks/useHeader";
import axios from 'axios';

const ContactForm = () => {
    const { isDarkMode } = useHeader() || {};

    const telegramBotToken = import.meta.env.VITE_REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_REACT_APP_TELEGRAM_CHAT_ID;

    const sendMessage = async (message: string) => {
    try {
        const response = await axios.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
        });

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    };

    // Exemple d'utilisation
    useEffect(() => {
        sendMessage('Hello from React App!');
    }, [isDarkMode])


    return (
        <form
            className={'flex flex-col items-center mb-5 ' + (isDarkMode ? '' : 'codia-aliceblue-text')}
            style={{
                ...styles.form,
                backgroundColor: isDarkMode ? '#021F3775' : '#345166'}}>
            <div className="flex my-10 w-4/5 justify-between">
                <CustomInput label="First Name" type="text" />
                <CustomInput label="Last Name" type="text" />
            </div>
            <div className="w-4/5">
                <div className="mb-10">
                    <CustomInput label="Email" type="email" />
                </div>
                <div className="mb-10">
                    <CustomInput label="Phone" type="tel" />
                </div>
                <div className="mb-10">
                    <CustomInput label="Message" type="textarea" />
                </div>
            </div>
            <div className="mb-10">
                <SendButton onSubmit={() => alert('Send')} isDarkMode={isDarkMode} />
            </div>
      </form>
    );
};

interface Styles {
    form: CSSProperties,
}

const styles: Styles = {
    form: {
        backgroundColor: '#021F3775',
        borderRadius: 8,
        width: '40%',
    }
}

export default ContactForm;
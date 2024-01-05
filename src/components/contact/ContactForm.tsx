import { CSSProperties } from "react";
import CustomInput from "../customs/CustomInput";
import SendButton from "./SendButton";
import { useHeader } from "../../hooks/useHeader";
import useContactForm from "../../hooks/useContactForm";

const ContactForm = () => {
    const { isDarkMode } = useHeader() || {};
    const {
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
    } = useContactForm();

    return (
        <div
            className={'flex flex-col items-center mb-5 ' + (isDarkMode ? '' : 'codia-aliceblue-text')}
            style={{
                ...styles.form,
                backgroundColor: isDarkMode ? '#021F3775' : '#345166'}}>
            <div className="flex my-10 w-4/5 justify-between">
                <CustomInput label="First Name" type="text" value={firstName} onChange={setFirstName} />
                <CustomInput label="Last Name" type="text" value={lastName} onChange={setLastName} />
            </div>
            <div className="w-4/5">
                <div className="mb-10">
                    <CustomInput label="Email" type="email" value={email} onChange={setEmail} />
                </div>
                <div className="mb-10">
                    <CustomInput label="Phone" type="tel" value={phone} onChange={setPhone} />
                </div>
                <div className="mb-10">
                    <CustomInput label="Message" type="textarea" value={message} onChange={setMessage} />
                </div>
            </div>
            <div className="mb-10">
                <SendButton onSubmit={sendContactMessage} isDarkMode={isDarkMode} />
            </div>
      </div>
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
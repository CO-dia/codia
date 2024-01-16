import { CSSProperties } from "react";
import CustomInput from "../customs/CustomInput";
import SendButton from "./SendButton";
import { useHeader } from "../../hooks/useHeader";
import useContactForm from "../../hooks/useContactForm";

const ContactForm = () => {
    const { isDarkMode } = useHeader() || {};
    const {
        contactForm,
        errors,
        handleChange,
        sendContactMessage
    } = useContactForm();

    return (
        <div
            className={'flex flex-col items-center mb-5 ' + (isDarkMode ? '' : 'codia-aliceblue-text')}
            style={{
                ...styles.form,
                backgroundColor: isDarkMode ? '#021F3775' : '#345166'}}>
            <div className="flex my-10 w-4/5 justify-between">
                <CustomInput 
                    label="First Name" 
                    name="firstName"
                    type="text" 
                    value={contactForm.firstName}
                    error={errors.firstName} 
                    onChange={handleChange} />
                <CustomInput 
                    label="Last Name" 
                    name="lastName"
                    type="text" 
                    value={contactForm.lastName} 
                    error={errors.lastName}
                    onChange={handleChange} />
            </div>
            <div className="w-4/5">
                <div className="mb-10">
                    <CustomInput 
                        label="Email" 
                        name="email"
                        type="email" 
                        value={contactForm.email} 
                        error={errors.email}
                        onChange={handleChange} />
                </div>
                <div className="mb-10">
                    <CustomInput 
                        label="Phone" 
                        name="phone"
                        type="tel" 
                        value={contactForm.phone} 
                        error={errors.phone}
                        onChange={handleChange} />
                </div>
                <div className="mb-10">
                    <CustomInput 
                        label="Message" 
                        name="message"
                        type="textarea" 
                        value={contactForm.message} 
                        error={errors.message}
                        onChange={handleChange} />
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
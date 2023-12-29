import { CSSProperties } from "react";
import CustomInput from "../customs/CustomInput";
import SendButton from "./SendButton";
import { useHeader } from "../../hooks/useHeader";

const ContactForm = () => {
    const { isDarkMode } = useHeader() || {};

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
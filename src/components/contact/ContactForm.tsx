import { CSSProperties } from "react";
import CustomInput from "../customs/CustomInput";
import SendButton from "./SendButton";

const ContactForm = () => {
    return (
        <form className="flex flex-col items-center" style={styles.form}>
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
                <SendButton />
            </div>
      </form>
    );
};

interface Styles {
    form: CSSProperties,
}

const styles: Styles = {
    form: {
        backgroundColor: '#021F3735',
        borderRadius: 8,
        width: '40%',
    }
}

export default ContactForm;
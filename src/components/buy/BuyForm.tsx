import { CSSProperties } from "react";
import useBuyForm from "../../hooks/useBuyForm";
import { useHeader } from "../../hooks/useHeader";
import CustomInput from "../customs/CustomInput";
import AddressForm from "../customs/AddressForm";

const BuyForm = () => {
    const { isDarkMode } = useHeader() || {};
    const {
        buyForm,
        errors,
        handleChange,
    } = useBuyForm();

    return (
        <div
            className={'flex flex-col items-center mb-5 mt-5 ' + (isDarkMode ? '' : 'codia-aliceblue-text')}
            style={{
                ...styles.form,
                backgroundColor: isDarkMode ? '#021F3775' : '#345166'}}>

            <div className="flex my-10 w-4/5 justify-between">
                <CustomInput 
                    label="First Name" 
                    placeholder="John"
                    name="firstName"
                    type="text" 
                    value={buyForm.firstName}
                    error={errors.firstName} 
                    onChange={handleChange} />
                <CustomInput 
                    label="Last Name" 
                    placeholder="Doe"
                    name="lastName"
                    type="text" 
                    value={buyForm.lastName} 
                    error={errors.lastName}
                    optional={true}
                    onChange={handleChange} />
            </div>
            <div className="w-4/5">
                <div className="mb-10">
                    <CustomInput 
                        label="Email" 
                        placeholder="johndoe@gmail.com"
                        name="email"
                        type="email" 
                        value={buyForm.email[0]} 
                        error={errors.email[0]}
                        optional={true} 
                        onChange={handleChange} />
                </div>
                <div className="mb-10">
                    <CustomInput 
                        label="Phone" 
                        placeholder="+1234567890"
                        name="phone"
                        type="tel" 
                        value={buyForm.phone[0]} 
                        error={errors.phone[0]}
                        optional={true}
                        onChange={handleChange} />
                </div>
                <div className="mb-10">
                    <CustomInput 
                        label="Message" 
                        placeholder="Your message ..."
                        name="message"
                        type="textarea" 
                        value={buyForm.message} 
                        error={errors.message}
                        onChange={handleChange} />
                </div>
            </div>
            <div className="mb-10 w-full">
                <AddressForm address={buyForm.address[0]} errors={buyForm.address[0]} handleChange={handleChange} />
            </div>
        </div>
    )
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

export default BuyForm;

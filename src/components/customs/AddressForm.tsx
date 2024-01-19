import { useHeader } from "../../hooks/useHeader";
import { Address } from "../../types/Address";
import CustomInput from "./CustomInput";

interface AddressFormProps {
    address: Address,
    errors: Address,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const AddressForm = ({address, errors, handleChange} : AddressFormProps) => {
    const { isDarkMode } = useHeader() || {};

    return (
        <div
            className={'flex flex-col items-center mb-5 ' + (isDarkMode ? '' : 'codia-aliceblue-text')}>
            
            <div className="w-4/5">
                <div className="mb-10">
                    <CustomInput 
                        label="Street Address" 
                        placeholder="25 Queen Street"
                        name="streetAddress"
                        type="text" 
                        value={address.streetAddress} 
                        error={errors.streetAddress}
                        onChange={handleChange} />
                </div>
                <div>
                    <CustomInput 
                        label="Apt, Suite, Bldg, Gate Code." 
                        placeholder="302"
                        name="appartmentNumber"
                        type="text" 
                        value={address.appartmentNumber} 
                        error={errors.appartmentNumber}
                        optional={true}
                        onChange={handleChange} />
                </div>
            </div>

            <div className="flex my-10 w-4/5 justify-between">
                <CustomInput 
                    label="City" 
                    placeholder="Montreal"
                    name="city"
                    type="text" 
                    value={address.city} 
                    error={errors.city}
                    onChange={handleChange} />
                <CustomInput 
                    label="State, Region" 
                    placeholder="Quebec"
                    name="state"
                    type="text" 
                    value={address.state} 
                    error={errors.state}
                    optional={true}
                    onChange={handleChange} />
            </div>

            <div className="flex mb-10 w-4/5 justify-between">
                <CustomInput 
                    label="Country" 
                    placeholder="Canada"
                    name="country"
                    type="text" 
                    value={address.country} 
                    error={errors.country}
                    onChange={handleChange} />
                <CustomInput 
                    label="Zip Code" 
                    placeholder="J4B 1X6"
                    name="zip"
                    type="text" 
                    value={address.zip} 
                    error={errors.zip}
                    onChange={handleChange} />
            </div>
        </div>
    )
};

export default AddressForm;

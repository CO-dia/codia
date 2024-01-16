import { CSSProperties, ChangeEvent, Dispatch, SetStateAction } from "react";

interface CustomInputProps {
    label: string,
    type: string,
    value: string,
    onChange: Dispatch<SetStateAction<string>>
}

const CustomInput = ({
    label,
    type,
    value,
    onChange }: CustomInputProps) => {
    
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        onChange(value);
    };
    
    return (
        <div className='flex flex-col'>
            <label className='ml-1'>
                {label}
            </label>
            {type != 'textarea' ?
                <input
                    type={type}
                    value={value}
                    onChange={handleChange}
                    style={{ ...styles.input, height: 50}} />
                :
                <textarea
                    value={value}
                    onChange={handleChange}
                    style={{
                        ...styles.input,
                        height: 150,
                        resize: 'none',
                    }}
                />
            }
        </div>
    );
};

interface Styles {
    input: CSSProperties,
}

const styles: Styles = {
    input: {
        width: '100%',
        backgroundColor: '#CCE6F4',
        borderRadius: 5,
        padding: '0 2%',
        color: 'black'
    }
}

export default CustomInput;
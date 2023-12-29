import { CSSProperties } from "react";

interface CustomInputProps {
    label: string,
    type: string,
}

const CustomInput = ({
    label,
    type }: CustomInputProps) => {
    
    return (
        <div className='flex flex-col'>
            <label className='ml-1'>
                {label}
            </label>
            {type != 'textarea' ?
                <input
                    type={type}
                    style={{ ...styles.input, height: 50}} />
                :
                <textarea
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
        color: 'black'
    }
}

export default CustomInput;
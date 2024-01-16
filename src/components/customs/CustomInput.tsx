import { CSSProperties } from "react";

interface CustomInputProps {
    label: string,
    name: string,
    type: string,
    value: string,
    error: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const CustomInput = ({
    label,
    name,
    type,
    value,
    error,
    onChange }: CustomInputProps) => {

    const errorStyle: CSSProperties = error ? {
        border: '1px solid red'
    } : {};
    
    return (
        <div className='flex flex-col'>
            <label className='ml-1'>
                {label}
            </label>
            {type != 'textarea' ?
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    style={{ 
                        ...styles.input, 
                        ...errorStyle,
                        height: 50,
                    }} />
                :
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    style={{
                        ...styles.input,
                        ...errorStyle,
                        height: 150,
                        resize: 'none',
                        paddingTop: 7
                    }}
                />
            }
            {
                error &&
                <p className='text-red-500 text-base ml-1'>
                    {error}
                </p>
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
import { CSSProperties } from "react";

interface CustomInputProps {
    label: string,
    name: string,
    placeholder: string,
    type: string,
    value: string | undefined,
    error: string | undefined,
    optional?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const CustomInput = ({
    label,
    name,
    placeholder,
    type,
    value,
    error,
    optional = false,
    onChange }: CustomInputProps) => {

    const errorStyle: CSSProperties = error ? {
        border: '2px solid red'
    } : {};
    
    return (
        <div className='flex flex-col'>
            <label className='ml-1'>
                {label} {optional && <span className='text-gray-500'>(optional)</span>}
            </label>
            {type != 'textarea' ?
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
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
                    placeholder={placeholder}
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
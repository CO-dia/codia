interface SendButtonProps {
    onSubmit: () => void,
    isDarkMode: boolean | undefined
}

const SendButton = ({ onSubmit, isDarkMode }: SendButtonProps) => {
    return (
        <button
            className={"p-3.5 w-44 rounded-md " + (isDarkMode ? "codia-yellow-background codia-darkblue-text" : "codia-darkblue-background codia-aliceblue-text")}
            onClick={onSubmit}>
            Send
        </button>
    );
};

export default SendButton;
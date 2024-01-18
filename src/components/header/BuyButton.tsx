import { CSSProperties } from 'react';
import { useHeader } from '../../hooks/useHeader';
import { useNavigate } from "react-router-dom";

const BuyButton = () => {
    const { isDarkMode } = useHeader() || {};
    const navigate = useNavigate();

    return (
        <button
            style={{
                ...styles.button,
                ...(isDarkMode ? styles.buttonDk : styles.buttonLgt)
            }}
            onClick={() => navigate("/buy")}>
            Buy      
        </button>
    )
}

interface Styles {
    buttonLgt: CSSProperties,
    buttonDk: CSSProperties,
    button: CSSProperties
}

const styles: Styles = {
    buttonDk: {
        backgroundColor: '#FFF689',
        color: '#022038'
    },
    buttonLgt: {
        backgroundColor: '#022038',
        color: '#CCE6F4'
    },
    button: {
        height: '50px',
        width: '300%',
        borderRadius: '8%'
    }
}

export default BuyButton
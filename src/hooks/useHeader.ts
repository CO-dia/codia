import {useContext} from 'react';
import { DarkLightModeContext } from '../contexts/DarkLightModeContext';

/**
 *  Hook to post comment.
 * @return {object}
 */
export function useHeader() {
    const darkLightModeContext = useContext(DarkLightModeContext);

    // When the context is not defined (For example during the first loading)
    if (!darkLightModeContext) {
        return;
    }

    const { isDarkMode, setIsDarkMode } = darkLightModeContext;

    const body = document.body;

    function handleSwitch() {
        console.log(isDarkMode);
        if (!isDarkMode) {
            body.id = 'bg-dk-mode';
            localStorage.setItem('themePreference', 'dark');
        }
        else {
            body.id = 'bg-lgt-mode';
            localStorage.setItem('themePreference', 'light');
        }
        setIsDarkMode(!isDarkMode);
    }

    return {
        handleSwitch,
        isDarkMode
    };
}

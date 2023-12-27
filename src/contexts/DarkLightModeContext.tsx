import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

interface DarkLightModeContextProps {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const DarkLightModeContext = createContext<DarkLightModeContextProps | undefined>(undefined);

interface DarkLightModeContextProviderProps {
  children: ReactNode;
}

/**
 * Provider for the DarkLightModeContext.
 * @param {DarkLightModeContextProviderProps} props
 * @return {JSX.Element}
 */
export function DarkLightModeContextProvider(props: DarkLightModeContextProviderProps): JSX.Element {
  const { children } = props;

  const body = document.body;
  const themePreference = localStorage.getItem("themePreference");

  useEffect(() => {
    if (themePreference) {
      body.id = themePreference == 'dark' ? 'bg-dk-mode' : 'bg-lgt-mode';
      return;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.id = 'bg-dk-mode';
      localStorage.setItem('themePreference', 'dark');
    }
    else {
      body.id = 'bg-lgt-mode';
      localStorage.setItem('themePreference', 'light');
    }
  }, [body, themePreference])

  const preference = themePreference ? themePreference == 'dark' : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDarkMode, setIsDarkMode] = useState<boolean>(preference);

  const contextValue: DarkLightModeContextProps = {
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <DarkLightModeContext.Provider value={contextValue}>
      {children}
    </DarkLightModeContext.Provider>
  );
}

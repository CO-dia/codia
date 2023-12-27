import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { DarkLightModeContextProvider } from './contexts/DarkLightModeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkLightModeContextProvider>
      <App />
    </DarkLightModeContextProvider>
  </React.StrictMode>,
)

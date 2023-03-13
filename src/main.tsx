import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle, theme } from 'styles';
import { ThemeProvider } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

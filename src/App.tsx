import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import Routes from 'Router';
import { useThemeStore } from 'stores/useThemeStore';
import { GlobalStyle, theme } from 'styles';

function App() {
  const mode = useThemeStore((state) => state.theme);

  return (
    <ThemeProvider theme={theme[mode]}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;

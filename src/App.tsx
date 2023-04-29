import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from 'styles';

import { useThemeStore } from '@/stores';

import Home from '@/components/Home';

function App() {
  const mode = useThemeStore((state) => state.theme);

  return (
    <ThemeProvider theme={theme[mode]}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;

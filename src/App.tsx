import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from 'styles';

import Home from '@/components/Home';
import { useThemeStore } from '@/stores/useThemeStore';

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

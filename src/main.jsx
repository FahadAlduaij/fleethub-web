import { StrictMode, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import { LanguageProvider, useLanguage } from './i18n.jsx';
import { createAppTheme } from './theme.js';

/** Rebuilds the theme (direction + Arabic typography) when the language flips. */
function ThemedApp() {
  const { lang } = useLanguage();
  const theme = useMemo(() => createAppTheme(lang), [lang]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <ThemedApp />
    </LanguageProvider>
  </StrictMode>,
);

import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { dark, light, THEME } from '../contants/theme';

const ThemeContext = createContext();

const theme = {
  [THEME.DARK]: dark,
  [THEME.LIGHT]: light,
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(THEME.DARK);

  const toggleTheme = () => {
    setSelectedTheme((currTheme) =>
      currTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    );
  };

  const value = useMemo(
    () => ({
      theme: selectedTheme,
      toggleTheme,
    }),
    [selectedTheme]
  );

  const styledTheme = useMemo(() => theme[selectedTheme], [selectedTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={styledTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

import { createContext } from "react";

export const themes = {
    light: {
      foreground: '#000000',
      background: '#fff',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };

export const CookingContext = createContext({
    theme: themes.light,
    toggleTheme: () => {}
});
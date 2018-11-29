import React, { createContext, Component } from "react";

export const themes = {
    light: {
      foreground: '#000000',
      background: '#fff',
    },
    dark: {
      foreground: '#ffffff',
      background: '#000',
    },
  };

export const CookingContext = createContext({
    theme: themes.light,
    toggleTheme: () => {}
});
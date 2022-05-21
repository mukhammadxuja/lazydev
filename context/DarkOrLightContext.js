import React, { useState, useContext, createContext } from "react";
import { useTheme } from "next-themes";

const DarkOrLightContext = createContext();

const DarkOrLightState = ({ children }) => {
  const { system, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <DarkOrLightContext.Provider value={{ currentTheme, setTheme, system, theme, }}>
      {children}
    </DarkOrLightContext.Provider>
  );
};

export default DarkOrLightState;

export const useDarkOrLightContext = () => useContext(DarkOrLightContext);

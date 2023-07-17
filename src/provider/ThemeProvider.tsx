import { ReactNode } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext";
import React from "react";
import { changeCssRootVariables } from "../model/ChangeCssRootVariable";
import { Storage } from "../model/Storage";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = React.useState<Theme>(
    Storage.getItem("theme") || Theme.LIGHT
  );
  changeCssRootVariables(theme);
  const changeTheme = (theme: Theme) => {
    Storage.setItem("theme", theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

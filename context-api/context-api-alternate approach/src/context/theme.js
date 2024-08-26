import { createContext, useContext } from "react";

export const themeContext = createContext({

    lightTheme:()=>{},

    darkTheme:()=>{},

    themeMode:"light"
})
export const ThemeProvider = themeContext.Provider
// usetheme hook is created
export default function useTheme(){
   return useContext(themeContext);
}

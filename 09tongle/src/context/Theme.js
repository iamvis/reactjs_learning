import { createContext, useContext } from "react";

export const ThemeContext =createContext({
themeMode: "light",
darkTheme: ()=>{},
lightTheme: ()=>{},
})
export const ThemeProvider =ThemeContext.Provider  

/* provider provide karta  hai context ke under ki ramayan */
/* ye custom hook hai */

export default function useTheme(){
    return useContext(ThemeContext)
}
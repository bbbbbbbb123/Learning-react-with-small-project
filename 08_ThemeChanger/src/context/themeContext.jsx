import React , { createContext , useContext} from "react"

const themeContext = createContext({
    themeMode : "light" , 
    lightTheme:() => {},
    darkTheme:() => {}
})

export  const ThemeProvider = themeContext.Provider

export default  function useTheme() { 
    return  useContext(themeContext)}
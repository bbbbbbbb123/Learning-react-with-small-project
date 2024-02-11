import { useState } from 'react'
import {ThemeProvider} from './context/themeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [themeMode, setThemeMode] = useState("light")
    
  const lightTheme = () => setThemeMode("light")
   
  const darkTheme = () => setThemeMode("dark")

  const selectTheme= document.querySelector("html")
  

  useEffect (()=> {
     selectTheme.classList.remove("light" , "dark")
     selectTheme.classList.add (themeMode) 
  } , [themeMode])

  return (
    <ThemeProvider value={{ themeMode , lightTheme , darkTheme}} >
     <div className="flex-wrap min-h-screen items-center">
      <div className="w-full">
       <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
                </div>"
        <div className="w-full max-w-sm mx-auto">
            <Card />
      
       </div>   
     </div>
    </div>
   
    </ThemeProvider>
  )

}

export default App

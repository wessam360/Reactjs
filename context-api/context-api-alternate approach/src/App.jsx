import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/themeBtn'
import CardUi from './components/cardUi'

function App() {
const [themeMode,setThemeMode] = useState("light");

const lightTheme = () =>{

  setThemeMode("light")
}
const darkTheme = () =>{
  setThemeMode("dark")
}
useEffect(() => {
const themeData = document.querySelector("html")
themeData.classList.remove("light","dark");
themeData.classList.add(themeMode);
}, [themeMode])
  return (
    <>
  <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>

  <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* themeBtn */}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                       <CardUi />
                    </div>
                </div>
            </div>

  </ThemeProvider>
    </>
  )
}

export default App

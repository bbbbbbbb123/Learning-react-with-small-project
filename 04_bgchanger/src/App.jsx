import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("grey")
  return (
  <div className="w-full h-screen duration-200 " 
  style={{backgroundColor: color}}>
   <div className="fixed flex flex-col flex-wrap justify-center left-12 inset-y-0 py-1 ">
    
    <div className="flex flex-col flex-wrap  justify-center gap-3 shadow-xl bg-white  px-3 py-7 rounded-3xl"> 
  
      <button
       onClick={()=>setColor("Red")}
       className='outline-none px-3 py-2 rounded-full text-white shadow-xl'  
       style={{background: "Red"}}
       > Red </button>  


       <button 
       onClick={()=>setColor("Blue")}
       className='outline-none px-3 py-2 rounded-full text-white shadow-xl' style={{background: "Blue"}}
       > Blue </button>


        <button  
       onClick={()=>setColor("Green")} 
        className='outline-none px-3 py-2 rounded-full text-white shadow-xl' style={{background: "Green"}}
       > Green </button>


        <button 
        onClick={()=>setColor("Magenta")}
        className='outline-none px-3 py-2 rounded-full text-white shadow-xl' style={{background: "Magenta"}}
       > Magenta </button>
 

        <button 
        onClick={()=>setColor("Orange")}
        className='outline-none px-3 py-2 rounded-full text-white shadow-xl' style={{background: "Orange"}}
       > Orange </button>


        <button 
        onClick={()=>setColor("White")}
        className='outline-none px-3 py-2 rounded-full text-black shadow-xl' style={{background: "White"}}
       > White </button>


        <button 
        onClick={()=>setColor("Olive")}
        className='outline-none px-3 py-2 rounded-full text-white shadow-xl' style={{background: "Olive"}}
       > Olive </button>

        <button 
        onClick={()=>setColor("grey")}
        className='outline-none px-3 py-2 rounded-full text-white shadow-xl' style={{background: "grey"}}
       > grey </button>

    </div>

  </div>
 </div>
  )
}

export default App

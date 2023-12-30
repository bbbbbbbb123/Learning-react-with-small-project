import { useCallback, useEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // const [ color , setColor] = useState(black)

  // refhooks
  const pswRef= useRef(null)
   
  // useCallback
  const pswGenerator = useCallback(() => {
    let pass = ""
    let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numAllowed){
      str +="0123456789"
     }
     if(charAllowed){
      str +=`!@#$%^&*()_+|}{:"?><,./;'[]\=-`
    }
    for (let i = 0; i <=length; i++) {
     let char =  Math.floor(Math.random()*str.length+1)
     pass += str.charAt(char)
      }
      setPassword(pass)
     },
  [length , numAllowed , charAllowed, setPassword])
    
  useEffect(()=>{
    pswGenerator()
  } ,
  [length , numAllowed , charAllowed , pswGenerator])

  // COPY
   let copyPasswordToClipboard = useCallback(() => {
    pswRef.current?.select();
    window.navigator.clipboard.writeText(password)

   }, 
   [password])
      //  THEME CHANGE
      // let theme_change=useCallback (()=> {

      // },[])
  


return(
  <div className='h-screen w-full bg-red-900 flex  flex-col'>
  {/* main container */}
  <div className="w-full max-w-md mx-auto mt-16 mb-auto px-4 py-3 shadow-md rounded-2xl text-black bg-gray-500 ">

    
  <h1 className="text-yellow text-center my-3 ">Password Generator</h1>

  {/* INPUT BOX AND COPY BUTTON */}
  <div className="flex shadow rounded-2xl overflow-hidden mb-4">
  <input type="text " 
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='psw'
    readOnly
    ref={pswRef}
   />
   <button 
   onClick={copyPasswordToClipboard}
   className='outline-none bg-blue-500 px-3 py-0.5 text-red-600 
     shrink-0'>COPY</button>
     </div>

           {/* LENGTH NUMALLOWED CHAR ALLOWED */}
     <div className="flex items-center gap-x-2">
           
           {/* LENGTH */}
     
        <div className="flex items-center gap-x-1 ">
          <input type="range"
           min={8}
           max = {99}
           value={length}
           className='curser-pointer'
           onChange = {(e) =>{
           setLength(e.target.value) } }
           />
          <label>Length:{length}</label>
        </div>

              {/* NUM ALLOWED CHECKBOX */}

        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={numAllowed}
          id = "numInput"
          onchange={()=>
          {setNumAllowed((prev)=>! prev)}}
          />
          <label htmlFor="numInput">Numbers</label>
          </div> 

               {/* CHAR ALLOWED CHECKBOX */}

          <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id = "charInput"
          onchange={()=>
          {setCharAllowed((prev)=>! prev)}}
          />
          <label htmlFor="charInput">Charcters</label>
          </div>


     </div>


  </div>
  
  
</div>

)
}
export default App

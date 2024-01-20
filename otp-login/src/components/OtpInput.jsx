
import {useState , useRef , useEffect} from "react"


    const OtpInput = ({length = 4 , onOtpSubmit = () => {}}) => {

    const [otp, setOtp] = useState(new Array(length).fill(""))
     
    const inputRef = useRef([])

    useEffect(() => {
     if(inputRef.current[0]){
      inputRef.current[0].focus()
     }
    }, [])
    

    const handledChange= (i , e) =>{
     const value = e.target.value;
     if(isNaN(value))return ;
       const newOtp = [...otp]

       // allowing only 1 input
       newOtp[i]= value.substring(value.length-1);
       setOtp(newOtp);

       //submit trigger
       const combineOtp = newOtp.join("") ;
       if(combineOtp.length === length)
     onOtpSubmit(combineOtp);

    //  move to the nextinput if current feild is feiled
        if(value  && i < length-1 &&  inputRef.current[i+1]) {
          inputRef.current[i +1] .focus() ;
          
        }
    }

    const handledClick = (i) => {
      inputRef.current[i].setSelectionRange(1 , 1);
      if (i> 0 && !otp[i-1]) {
        inputRef.current[otp.indexOf("")].focus()
      }
    }

    const handleKeyDown = (i,e) => {
      if(
        e.key === "Backspace" && 
        !otp[i] &&
        i > 0 &&
        inputRef.current[ i -1 ]
      ){
        inputRef.current[ i -1 ].focus() ;
      }
    }
  return (
    <div>
      {/* //i mean index */}
       { otp.map(( value , i) => {
       return (
        <input type="text" 
         key = {i}
         value={value}
         ref={(input)=> (inputRef.current[i]= input) }
         className="bg-slate-300 rounded-lg w-10 h-10 m-1 text-center "
         onChange={(e) => handledChange(i,e)}
         onClick ={() => handledClick(i)}
         onKeyDown={(e) => handleKeyDown(e,i)}
        />
       )  
        })
    }
    </div>
  )
}

    
export default OtpInput
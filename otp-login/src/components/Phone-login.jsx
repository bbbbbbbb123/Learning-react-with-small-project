import React , {useState} from 'react'
import OtpInput from './OtpInput'

const PhoneOtpLogin = () => {

  const [phoneNum, setphoneNum] = useState("")
  const [showOtpInput, setShowOtpInput] = useState(false)

   const handeldPhoneSubmit = (e) => {
     e.preventDefault()
     // phone numbee validation
     const regex =/[^0-9]/g;
    
     if(phoneNum.length<10 || regex.test(phoneNum)){
        alert ("invalid Phone Number");
        return ;  
     }
     setShowOtpInput(true);
   }

    const onOtpSubmit = (otp) => {
      console.log("Login Successful" , otp);
    }
    


  return (
    <div>
 {!showOtpInput ? (
      <form onSubmit={handeldPhoneSubmit}>
      <input 
      type="text" 
      placeholder='Enter Phone Number '
      className=' border-black px-5 py-2 mx-3  bg-slate-200 rounded-md '
      value={phoneNum} 
      onChange={(e) => {
        setphoneNum(e.target.value)
      }}
      />
      <button 
      type= "submit" 
      className='px-3 py-2 rounded-md bg-slate-400'>
        Submit
        </button> 
        
</form>
    ) : ( 
    <div>
      <p> Enter imginary Otp sent to {phoneNum} </p>
      <OtpInput length={4} onOtpsubmit= {onOtpSubmit} / >
    </div>
)}

</div>
  )
}

export default PhoneOtpLogin
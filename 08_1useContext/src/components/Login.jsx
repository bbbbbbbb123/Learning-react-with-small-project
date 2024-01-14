import React , {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login ()  {
const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
  const {setUser} = useContext(UserContext)

  const handleSubmit = (e)=> {
    e.preventDefault()
    setUser({username , password})
  }
return (
<div className=' w-full  bg-slate-400 flex flex-col justify-center align-middle mx-auto my-auto p-4 rounded-l '> 
    <h1 className="pb-3">Login Please</h1>
     <input 
     className='  py-2 rounded-lg mx-auto  border-gray-500 '
     type="text"
     placeholder='Username'
     value={username}
     onChange={(e) => {
        setUsername(e.target.value)
     }} /> 
     <input 
     className='py-2 mt-4 w-fit rounded-lg mx-auto  border-gray-500'
     type="text"
     placeholder='Password'
     value={password}
     onChange={(e) => {
        setPassword(e.target.value)
     }} />
     <button className=" inline-block rounded bg-success px-6 pb-2 pt-2.5  "
     onClick={handleSubmit}>submit</button>

</div>
)
}
export default Login
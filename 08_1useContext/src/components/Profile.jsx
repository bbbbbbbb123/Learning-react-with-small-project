import React ,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  const {user} = useContext(UserContext)
   if (!user) return <div>PLEASE LOGIN</div> 
   return <div> Welocome {user.username} </div>

}

export default Profile
import {useState, useEffect } from 'react' 
 import { useLoaderData } from 'react-router-dom'

function Github() {
    const data= useLoaderData()
//     const [data , setData] = useState([])
//     useEffect(()=>
//     { fetch("https://api.github.com/users/bbbbbbbb123")
// .then(response=> response.json)
// .then(data=> {setData(data)}

// )} , [])

  return (
    <div className="text-center text-4xl bg-gray-600 -3 p-3 "> Githubfollowers : {data.followers}
    <img src={data.avatar_url} alt=" git picture " 
     width={300}  />
   </div>)}

export default Github                                                            
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/bbbbbbbb123')
    return response.json()
}
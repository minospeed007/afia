import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register=()=>{
    const [error, setError] =useState(null)
const [user, setUser]=useState({
    username:"",

    password:"",
})
const navigate=useNavigate()

const addForm= async(e)=>{
e.preventDefault()
try{
await axios.post("http://localhost:8080/register",user)
navigate('/')
}catch(error){
setError(error.response.data)
}
}
const handleChange=(e)=>{
setUser(prev=>({...prev, [e.target.name]: e.target.value}))
console.log(user)
}
return(<>
    <div className='register-form' >
        <form>
    <input type='text' placeholder='enter username'
     onChange={handleChange} name='username'/><br/>
         
 <input type='password' placeholder='enter password' 
 onChange={handleChange} name='password'/><br/>
 
<button type='submit'onClick={addForm}>
submit</button>
        </form>
        {error && <p className='error'>{error}</p>}
    </div>
</>)
}
export default Register 

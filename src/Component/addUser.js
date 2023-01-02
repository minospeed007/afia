import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Add=()=>{
const[error, setError]=useState('')
const [user, setUser]=useState({
    id:null,
    name:"",
    age:null,
    username:"",

    password:"",
})
const navigate=useNavigate()

const addForm= async(e)=>{
e.preventDefault()
try{
await axios.post("http://localhost:8080/create",user)
navigate('/login')
}catch(err){
setError(err)
}
}
const handleChange=(e)=>{
setUser(prev=>({...prev, [e.target.name]: e.target.value}))
console.log(user)
}
return(<>

    <div className='register-form'>
        <form>
        <h5 className='register-title'> Register user</h5>
            
        <hr/>
        <input type='number' placeholder='enter id' className='input-add'
     onChange={handleChange} name='id'/><br/>
         
    <input type='text' placeholder='enter name'  className='input-add'
     onChange={handleChange} name='name'/><br/>
     <input type='number' placeholder='enter age' className='input-add'
     onChange={handleChange} name='age'/><br/>
   <input type='text' placeholder='enter username' className='input-add'
     onChange={handleChange} name='username'/><br/>
                   
 <input type='password' placeholder='enter password'  className='input-add'
 onChange={handleChange} name='password'/><br/>
<div className='submit-add'>
<button type='submit' className='submit' onClick={addForm}>
submit</button></div>
<h6>{error}</h6>
        </form>
    </div>
</>)
}
export default Add 

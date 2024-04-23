import React, {useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
const Update=()=>{
const [user, setUser]=useState({
    id:null,
    name:"",
    age:null,
    password:"",
    username:""
})
const navigate=useNavigate()
const location= useLocation()
const userId= location.pathname.split("/")[2]
const updateForm= async(e)=>{
e.preventDefault()
try{
await axios.put("http://localhost:3001/create/"+ userId,user)
navigate('/')
}catch(err){
console.log(err)
}
}
const handleChange=(e)=>{
setUser(prev=>({...prev, [e.target.name]: e.target.value}))
}
return(<>
    <div >
    <h3> Update User</h3>
        <form>
            <input type='number' placeholder='enter id' onChange={handleChange} name='id'/>
            <input type='text' placeholder='enter name' onChange={handleChange} name= 'name'/>
            <input type='number' placeholder='enter age' onChange={handleChange} name='age'/>
 <input type='password' placeholder='enter password' onChange={handleChange} name='password'/>
            <input type='text' placeholder='enter username' onChange={handleChange} name='username'/>
<button type='submit'onClick={updateForm}>Update</button>
        </form>
    </div>
</>)
}
export default Update 

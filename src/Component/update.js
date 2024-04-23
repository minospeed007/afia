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
    <div className='update-div'>
    <div className='form-divs'>
        <form className='update-form'>
        <h3 className='update-add'> Update User</h3>
     <hr/>
            <input type='number' placeholder='enter id' className='input-add'
            onChange={handleChange} name='id'/><br/>
            <input type='text' placeholder='enter name' className='input-add'
            onChange={handleChange} name= 'name'/><br/>
            <input type='number' placeholder='enter age' className='input-add'
             onChange={handleChange} name='age'/><br/>
 <input type='password' placeholder='enter password' className='input-add'
  onChange={handleChange} name='password'/><br/>
            <input type='text' placeholder='enter username' className='input-add' 
            onChange={handleChange} name='username'/><br/>

            <div className='submit-add'>
<button className='submit' type='submit'onClick={updateForm}>Update</button>
        </div>
        
        </form>
        </div>
    </div>
</>)
}
export default Update 

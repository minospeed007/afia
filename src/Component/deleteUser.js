import React, {useState} from 'react'
import axios from 'axios'
const DeleteUser=()=>{
const [user, setUser]=useState({id:null})

const addForm= async(e)=>{
e.preventDefault()
try{
await axios.post("http://localhost:8080/admin",user)
}catch(err){
console.log(err)
}
}
const handleChange=(e)=>{
setUser(prev=>({...prev, [e.target.name]: e.target.value}))
console.log(user)
}
return(<>

    <div className='register-form'>
        <form>
        <h5 className='register-title'> Delete user</h5>
            
        <hr/>
        <input type='number' placeholder='enter id' className='input-add'
     onChange={handleChange} name='id'/><br/>
         
    
<div className='submit-add'>
<button type='submit' className='submit' onClick={addForm}>
submit</button></div>
        </form>
    </div>
</>)
}
export default DeleteUser; 

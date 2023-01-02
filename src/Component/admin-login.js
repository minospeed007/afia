import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
const AdminLogin=()=>{
const [input, setInput]=useState({username:"", password:""})

const [loginStatus, setLoginStatus]= useState([])
const navigate=useNavigate()

const {currentUser}=useContext(AuthContext)
const { adminLogin}= useContext(AuthContext)
const {adError}= useContext(AuthContext)


const addForm= async(e)=>{
e.preventDefault()

 await  adminLogin(input)
.then((response)=>{
    console.log('success')
    
})

}
if(currentUser?.username){
    console.log(currentUser?.username)
    navigate('/admin/dashboard')
    }else{console.log("No current user")
     }
const handleChange=(e)=>{
setInput(prev=>({...prev, [e.target.name]: e.target.value}))
}

return(<>
       
    <div  className='form'>
    
    <div className='form-div'>
        <form>
        <p className='error'>{adError}</p>
    <input type='text' placeholder='Enter username'
     onChange={handleChange} name='username' className='login-input'/> <br/>
         
 <input type='password' placeholder='Enter password' className='login-input'
 onChange={handleChange} name='password'/> <br/>
 <div className='btn-div'>
 <button type='submit' className='login-btn' onClick={addForm}>
Login</button>

</div>
        </form>
        
      
      </div> 
      
    </div>
    
</>)
}
export default AdminLogin 

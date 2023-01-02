import React, {useState,useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
const Login=()=>{
const [input, setInput]=useState({username:"", password:""})
const [error, setError]= useState('')
const [loginStatus, setLoginStatus]= useState('')
const navigate=useNavigate()

const {currentUser}=useContext(AuthContext)
const {login}= useContext(AuthContext)
const {logout}= useContext(AuthContext)

const {isError} = useContext(AuthContext)

    if(currentUser?.username){
        console.log(currentUser?.username)
        navigate('/')
        }else{console.log("No current user")
         }


const addForm= async(e)=>{
e.preventDefault()

 await login(input)
.then((response)=>{
    
    console.log('success')
})

}


const handleChange=(e)=>{
setInput(prev=>({...prev, [e.target.name]: e.target.value}))
}
return(<>
    <div  className='form'>
    <div className='form-div'>
        <form>
        <p className='error'>{isError}</p>

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
export default Login 

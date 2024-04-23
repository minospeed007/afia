import React from 'react';
import {useRef, useState,createContext} from 'react'
import {signup, logOut, useAuth} from './firebase'

const Login =()=>{
const currentUser= useAuth();
const [loading, setLoading]= useState(false)
const emailRef = useRef();
const passwordRef = useRef();

async function handleSignup(){
    setLoading(true)
    try{
        await signup(emailRef.current.value,passwordRef.current.value)

    }catch{
        alert('Error !')
    }
    setLoading(false)
}
async function handleLogOut(){
    setLoading(true)
try{
    await logOut()
}catch{
    alert('Error !')
}
setLoading(false)
}
    return (<>
    <div className='main'>
    <div className='user'> Welcome { currentUser?.email }</div>
        <div className='main-input'>
            <input ref={emailRef} type='email' placeholder='email'/>
            <input ref={passwordRef} type='password'placeholder='password'/>
        </div>
        <div className="btn">
        <button  disabled={loading || currentUser} onClick={handleSignup}> Signup</button>
        <button  disabled={loading || !currentUser} onClick={handleLogOut}> Log out</button>

        </div>
    </div>
    </>)
}

export default Login;
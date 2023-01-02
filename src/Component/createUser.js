import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {useRef, useState,createContext} from 'react'
import {userAuth} from '../context/AuthContext'

const SignUser=()=>{
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const {createUser}= userAuth();
const navigate= useNavigate()
const handleSubmit= async (e)=>{
    e.preventDefault();
    setError('')

    try{
await createUser(auth,email,password)
navigate('/')
    }
    catch(e){
        setError(e.message)
        console.log(e.message)
    }
}
    return (<>
    <form onSubmit={handleSubmit}>
    <div className='main'>
    <div className='user'> Welcome { currentUser?.email }</div>
        <div className='main-input'>
            <input onChange={(e) =>setEmail(e.target.value)} type='email' placeholder='email'/>
            <input onChange={(e) =>setPassword(e.target.value)} type='password'placeholder='password'/>
        </div>
        <div className="btn">
        <button  disabled={loading || currentUser} onClick={handleSignup}> Signup</button>
        <button  disabled={loading || !currentUser} onClick={handleLogOut}> Log out</button>

        </div>
    </div>
    </form>
    </>)
}

export default SignUser;
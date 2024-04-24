import React, {createContext,useState, useEffect} from 'react'

import axios from 'axios'
export const AuthContext =createContext()

export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(localStorage.getItem("user")||null)
    const [err, setErr] = useState('')
    const [isError, setIsError] = useState('')
    const [adError, setAdError] = useState('')

    const [error, setError] = useState({})

    const login= async (input)=>{
        
        try{
            const res=  await axios.post("http://localhost:8080/login",input)
    setCurrentUser(res.data)
    setIsError(res?.data?.message)
    console.log(err);

        }catch(err){
            setErr(err)

        }
    
    };
    const adminLogin= async (input)=>{
        try{
        const res=  await axios.post("http://localhost:8080/adminLogin",input)
        setCurrentUser(res.data)
        setAdError(res?.data?.message)

        }catch(error){
            setError(error)

        }
        
        };
    const logout= async (input)=>{
          await axios.post("http://localhost:8080/logout",input)
        setCurrentUser(null)
        };

        useEffect( () => {
           localStorage.setItem("user", currentUser)
        }, [currentUser])
        return( 
        <AuthContext.Provider value={{currentUser, login, logout, adError, adminLogin, isError,error}}>
        {children}
        </AuthContext.Provider>
        )
}
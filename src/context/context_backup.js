import {createContext} from 'react'
import {getAuth, createUserWithEmailAndPassword,
    onAuthStateChanged, signOut, signIn} from "firebase/auth";
import{useAuthe} from '../firebase'
const userContext =createContext()

export const AuthContextProvider=({children})=>{
    const createUser=()=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
return <userContext.Provider value={createUser}>
{children}
</userContext.Provider>
}

export const userAuth=()=>{
    return userContext(userContext)
}
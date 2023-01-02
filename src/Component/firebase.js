// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {useState, useEffect} from 'react'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoyCYjcjPU6XSUQsRMisA_KxTyrz7RmbI",
  authDomain: "react-ecommerce-91fd0.firebaseapp.com",
  projectId: "react-ecommerce-91fd0",
  storageBucket: "react-ecommerce-91fd0.appspot.com",
  messagingSenderId: "209487728465",
  appId: "1:209487728465:web:0465e4eb8bfb1bc7a9cd70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth();
export const signup=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}
export function logOut(){
  return signOut(auth)
}
export const useAuth =()=>{
    const [ currentUser, setCurrentUser]= useState()
    useEffect(()=>{
    const unsub = onAuthStateChanged(auth,user=>setCurrentUser(user))
    return unsub
    },[])
    return currentUser
}
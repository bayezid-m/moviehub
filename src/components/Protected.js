import React,{useState} from 'react';
import { Navigate } from 'react-router-dom';
import {auth} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth'

const Protected = ({children}) => {
    const [user, setUser]=useState({})

    onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
   })
   
    if(!user){
        return<Navigate to ='/' />
    }
        else{
            return children;
        }
        
    
   
};

export default Protected;
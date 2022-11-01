import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import {auth} from '../firebase';
import {onAuthStateChanged, signOut} from 'firebase/auth'

const NavBar = () => {
   //console.log(auth.currenUser.email);
   const [user, setUser]=useState({})

   onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
   })

   const logout = async()=>{
    await signOut(auth);
   }
    return (
        <div className='navbar'>
        <Link to='/'><h1>MovieHub</h1></Link>
        {user?.email}
        <Link to='/login'> <button>  Sign In</button></Link>
        <Link to='/signup'><button>Sign Up</button></Link>   
        <button onClick={logout}>Log Out</button>    
        </div>
    );
};

export default NavBar;
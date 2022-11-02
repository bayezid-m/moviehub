import React, {useState} from 'react';
import { Link} from 'react-router-dom';
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
        <Link to='/'><button className='rootbtn'>MovieHub</button></Link>
       
        {user?.email ?
            <div className='navbtn2'>
        <Link to='/account'> <button className='inbutton'>  Account</button></Link>
        <button onClick={logout} className='navbtn'>Log Out</button>    
        </div>:
        <div className='navbtn2'>
        <Link to='/login'> <button className='inbutton'>  Sign In</button></Link>
        <Link to='/signup'><button className='navbtn'>Sign Up</button></Link>   
        
        </div>
        }
        
       
        </div>
    );
};

export default NavBar;
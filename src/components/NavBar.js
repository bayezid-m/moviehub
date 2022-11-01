import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='navbar'>
        <Link to='/'><h1>MovieHub</h1></Link>
        <Link to='/login'> <button>Sign in</button></Link>
        <Link to='/signup'><button>Sign out</button></Link>
            
           
            
        </div>
    );
};

export default NavBar;
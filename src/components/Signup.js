import React, { useState } from 'react';
import './Page.css';
import { Link, useNavigate } from 'react-router-dom';
import {auth, db} from '../firebase';
import {setDoc, doc} from 'firebase/firestore';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userz, setUserz] = useState('');
    const navigate = useNavigate();

  
    //////////////////////////////////
    const auth = getAuth();
    console.log(userz);
    const submitHanlde=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email),{
            savedShows:[]
        })
        .then((userCredential) => {
            // Signed in 
            const user = userCredential;
            setUserz(user)
            navigate('/');
        })
        .catch((error) => {
           console.log(error.message);
        });
        setEmail("");
        setPassword("")
    }
   

    return (
        <>
            <div className='main' >
                <div className='main1'>
                    <h1>Sign Up</h1>
                    <form className='main2'  >
                        <input className='input'
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" placeholder='email'>
                        </input>
                        <input className='input'
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" placeholder='password' ></input>
                        <button className='btn1' onClick={submitHanlde}>Sign UP</button>
                        
                        <div className='more'>
                            <p>
                                <input className='mr-2' type='checkbox' />
                                Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'>
                            <span className='text-gray-600'>
                                Already subscribed to Netflix?
                            </span>{' '}
                            <Link to='/login'>Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>

    );
};

export default Signup;

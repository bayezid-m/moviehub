import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Page.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userz, setUserz] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();
 
    const submitHanlde=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUserz(user);
           navigate('/');
        })
        .catch((error) => {
            console.log(error);
        });
        setEmail(" ");
        setPassword(" ")
    }
    console.log(userz);
    return (
        <>
            <div className='main' >
                <div className='main1'>
                    <h1>Sign In</h1>
                    <form className='main2'>
                        <input className='input' type="email" 
                         onChange={(e) => setEmail(e.target.value)} placeholder='email'></input>
                        <input className='input'
                        onChange={(e) => setPassword(e.target.value)}
                            type="password" placeholder='password'></input>
                        <button className='btn1' onClick={submitHanlde}>Sign IN</button>

                        <div className='more'>
                            <p>
                                <input className='mr-2' type='checkbox' />
                                Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'>
                            <span className='text-gray-600'>
                                New to Netflix?
                            </span>{' '}
                            <Link to='/signup'>Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
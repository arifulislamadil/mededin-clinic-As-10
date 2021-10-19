import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { BsGoogle } from "react-icons/bs";

import './Login.css';


const Login = () => {

    const { loginWithGoogle, setError, setUser, user, handleRegistration, handleEmail, handlePassword } = useAuth();
    const location = useLocation();
    const redirectUrl = location.state?.from || "/home";

    const history = useHistory();
    const handleGoogleSignin = () => {
        loginWithGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirectUrl)

            })
            .catch((error) => setError(error.message));
    }
    return (
        <div className="form-full">
            <div className="container pt-5 pb-5">
                <div className="text-center text-white">

                    <h1>Signin</h1>
                    <p>Don't have accout <Link to="/register">Create Account here</Link> </p>
                </div>
                <div className="d-flex align-items-center justify-content-center">

                    <div>
                        <form onSubmit={handleRegistration}>
                            <input onBlur={handleEmail} className="form-control mt-2" type="email" placeholder="Email Address"></input>

                            <input onBlur={handlePassword} className="form-control mt-2" type="password" placeholder="Password"></input>

                            <button className="form-control mt-2">login</button>

                        </form>

                        <div className="mt-2 text-center text-white">------OR-------</div>
                        <button onClick={handleGoogleSignin} className="mt-2 form-control">
                            <span className="text-success">    < BsGoogle /></span>  Login With Google</button>
                    </div>

                </div>
            </div>

        </div >

    );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Login.css';


const Login = () => {

    const { loginWithGoogle, user, handleRegistration, handleEmail, handlePassword } = useAuth();


    return (
        <div className="container mt-5 mb-5">
            <div className="text-center">

                <h1>Sign in</h1>

                <h1> {user.displayName}</h1>

                <p>Don't have accout <Link to="/register">Create Account here</Link> </p>
            </div>
            <div className="d-flex align-items-center justify-content-center">

                <div>
                    <form onSubmit={handleRegistration}>
                        <input onBlur={handleEmail} className="form-control mt-2" type="email" placeholder="Email Address"></input>

                        <input onBlur={handlePassword} className="form-control mt-2" type="password" placeholder="Password"></input>

                        <button className="form-control mt-2">login</button>

                    </form>

                    <div className="mt-2 text-center">------or-------</div>
                    <button onClick={loginWithGoogle} className="mt-2 form-control">Login With Google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;
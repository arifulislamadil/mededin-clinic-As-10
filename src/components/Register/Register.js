import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Register.css"

const Register = () => {
    const { loginWithGoogle, user, error, handleRegistration, handleEmail, handlePassword } = useAuth();

    return (
        <div className="container mt-5 mb-5">
            <div className="text-center">

                <h1>Please Register</h1>



                <p>Already have an accout <Link to="/login">Login</Link> </p>
            </div>
            <div className="d-flex align-items-center justify-content-center">

                <div>
                    <form onSubmit={handleRegistration}>
                        <input className="form-control" type="text" placeholder="Full Name"></input>
                        <input onBlur={handleEmail} className="form-control mt-2" type="email" placeholder="Email Address"></input>

                        <input onBlur={handlePassword} className="form-control mt-2" type="password" placeholder="Password"></input>

                        <div className="text-danger">{error}</div>

                        <button className="form-control mt-2">Register</button>
                    </form>


                    <div className="mt-2 text-center">------or-------</div>

                    <button onClick={loginWithGoogle} className="mt-2 form-control">Login With Google</button>
                </div>

            </div>
        </div>
    );
};

export default Register;
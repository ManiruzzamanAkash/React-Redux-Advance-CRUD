import React from 'react';
import { Link } from 'react-router-dom';    
import RegisterForm from '../components/register/RegisterForm';

const RegisterContainer = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">
                                                    Sign Up
                                                </h1>
                                            </div>

                                            <RegisterForm />
                                            <div className="text-center mt-5">
                                                <Link to="/auth/login" className="small">
                                                    Already an Account ?
                                                    Sign In Now <i className="fa fa-sign-out-alt"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterContainer;
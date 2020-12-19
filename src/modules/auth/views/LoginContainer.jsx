import React from 'react';
import LoginForm from '../components/login/LoginForm';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet"    

const LoginContainer = () => {
    return (
        <>
            <Helmet>
                <title>Login | React CRUD Application</title>
            </Helmet>
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
                                                    Login to User Panel
                                                </h1>
                                            </div>

                                            <LoginForm />
                                            <div className="text-center mt-5">
                                                <Link to="/auth/sign-up" className="small">
                                                    Create an Account <i className="fa fa-user-plus"></i>
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

export default LoginContainer;
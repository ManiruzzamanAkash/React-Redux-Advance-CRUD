import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { showToast } from '../../../master/utils/ToastHelper'
import { getAuthAction, handleChangeLoginInput, loginSubmitAction } from '../../redux/actions/AuthAction';

const LoginForm = withRouter(({ history }) => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.auth.isLoading);
    const loginMessage = useSelector((state) => state.auth.loginMessage);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const loginData = useSelector((state) => state.auth.loginData);
    const authUserData = useSelector((state) => state.auth.authUserData);

    const submitHandler = () => {
        dispatch(loginSubmitAction(loginData));
    }

    const handleChangeTextInput = (name, value) => {
        dispatch(handleChangeLoginInput(name, value));
    };

    const fillAdminData = () => {
        dispatch(handleChangeLoginInput('email', 'admin@example.com'));
        dispatch(handleChangeLoginInput('password', '123456'));
        showToast('success', 'Admin Data Set Successfully, Please Click Login')
    }

    useEffect(() => {
        dispatch(getAuthAction());
        if (typeof loginMessage !== 'undefined' || loginMessage !== null) {
            if (isLoggedIn && loginMessage.length > 0) {
                if (history.location.pathname === '/auth/login') {
                    history.replace("/dashboard");
                }
            }
        }
        if (history.location.pathname === '/auth/login') {
            if (typeof authUserData !== 'undefined' && authUserData !== null) {
                history.replace("/dashboard");
            }
        }
    }, [isLoggedIn, loginMessage, history, authUserData, dispatch]);
    return (
        <>
            <form className="user" onSubmit={handleSubmit(submitHandler)} method="POST">
                <div className="form-group">
                    <input className="form-control form-control-user"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email Address..."
                        required=""
                        aria-required="true"
                        ref={register({
                            required: 'Please give your email'
                        })}
                        onChange={(e) => handleChangeTextInput('email', e.target.value)}
                        value={loginData.email}
                        autoComplete="name"
                    />
                    {
                        errors.email &&
                        <div className="text-danger text-sm ml-4">{errors.email.message}</div>
                    }
                </div>
                <div className="form-group">
                    <input className="form-control form-control-user"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        required=""
                        aria-required="true"
                        ref={register({
                            required: 'Please give your password'
                        })}
                        onChange={(e) => handleChangeTextInput('password', e.target.value)}
                        value={loginData.password}
                        autoComplete="name"
                    />
                    {
                        errors.password &&
                        <div className="text-danger text-sm ml-4">{errors.password.message}</div>
                    }
                </div>

                {
                    !isLoading &&
                    <button className="btn btn-primary btn-user btn-block" type="submit">
                        Login <i className="fa fa-sign-out-alt"></i>
                    </button>
                }
                {
                    isLoading &&
                    <button className="btn btn-primary btn-user btn-block" type="button" disabled>
                        Logging In {"  "}
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>
                }
            </form>

            <div className="mt-3 text-center">
                <button className="btn btn-info btn-sm" onClick={fillAdminData}>
                   <i className="fa fa-lock"></i> Fill with Admin Credential
                </button>
            </div>
        </>

    );
})

export default LoginForm;
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { handleChangeRegisterInput, registerSubmitAction } from '../../redux/actions/AuthAction';

const RegisterForm = withRouter(({history}) => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.auth.isLoading);
    const loginMessage = useSelector((state) => state.auth.loginMessage);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const registerData = useSelector((state) => state.auth.registerData);
    const serverErrors = useSelector((state) => state.auth.errors);

    const submitHandler = () => {
        dispatch(registerSubmitAction(registerData));
    }

    const handleChangeTextInput = (name, value) => {
        dispatch(handleChangeRegisterInput(name, value));
    };

    useEffect(() => {
        if (typeof loginMessage !== 'undefined' || loginMessage !== null) {
            if (isLoggedIn && loginMessage.length > 0) {
                history.push("/dashboard");
            }
        }
    }, [isLoggedIn, loginMessage, history]);
    return (
        <form className="user" onSubmit={handleSubmit(submitHandler)} method="POST">
            
            <div className="form-group">
                <input className="form-control form-control-user"
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    required=""
                    aria-required="true"
                    ref={register({
                        required: 'Please give your name'
                    })}
                    onChange={(e) => handleChangeTextInput('name', e.target.value)}
                    value={registerData.name}
                    autoComplete="name"
                />
                {
                    errors.name &&
                    <div className="text-danger text-sm ml-4">{errors.name.message}</div>
                }
                {
                    typeof serverErrors.name != 'undefined' &&
                    <div className="text-danger text-sm ml-4">{serverErrors.name[0]}</div>
                }
            </div>
            
            
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
                    value={registerData.email}
                    autoComplete="name"
                />
                {
                    errors.email &&
                    <div className="text-danger text-sm ml-4">{errors.email.message}</div>
                }
                {
                    typeof serverErrors.email != 'undefined' &&
                    <div className="text-danger text-sm ml-4">{serverErrors.email[0]}</div>
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
                    value={registerData.password}
                    autoComplete="name"
                />
                {
                    errors.password &&
                    <div className="text-danger text-sm ml-4">{errors.password.message}</div>
                }
                {
                    typeof serverErrors.password != 'undefined' &&
                    <div className="text-danger text-sm ml-4">{serverErrors.password[0]}</div>
                }
            </div>

            
            <div className="form-group">
                <input className="form-control form-control-user"
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Enter Confirm Password"
                    required=""
                    aria-required="true"
                    ref={register({
                        required: 'Please give your confirm password'
                    })}
                    onChange={(e) => handleChangeTextInput('password_confirmation', e.target.value)}
                    value={registerData.password_confirmation}
                    autoComplete="name"
                />
                {
                    errors.password_confirmation &&
                    <div className="text-danger text-sm ml-4">{errors.password_confirmation.message}</div>
                }
            </div>

            {
                !isLoading && 
                <button className="btn btn-primary btn-user btn-block" type="submit">
                    Sign Up
                </button>
            }
            {
                isLoading && 
                <button className="btn btn-primary btn-user btn-block" type="button" disabled>
                    Signing Up {"  "}
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </button>
            }
        </form>
    );
})

export default RegisterForm;
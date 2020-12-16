import Axios from "axios";
import { toast } from 'react-toastify';

import * as Types from "../types/Types";

export const handleChangeLoginInput = (name, value) => (dispatch) => {
    let data = {
        name: name,
        value: value,
    }
    dispatch({ type: Types.CHANGE_LOGIN_INPUT, payload: data });
};

export const handleChangeRegisterInput = (name, value) => (dispatch) => {
    let data = {
        name: name,
        value: value,
    }
    dispatch({ type: Types.CHANGE_REGISTER_INPUT, payload: data });
};

export const loginSubmitAction = (postData) => async(dispatch) => {
    let response = {
        status: false,
        message: "",
        isLoading: true,
        access_token: null,
        userData: null
    };
    dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: response });

    try {
        await Axios.post(`${process.env.REACT_APP_API_URL}auth/login`, postData)
            .then((res) => {
                const { data, message, status } = res.data;
                const { access_token, user } = data;
                response.message = message;
                response.status = status;
                if (response.status) {
                    response.access_token = access_token;

                    // Store data's to local storage
                    localStorage.setItem('is_logged_in', true);
                    localStorage.setItem('access_token', access_token);
                    localStorage.setItem('userData', JSON.stringify(user));
                    toast.success(response.message);
                }
            })
            .catch((err) => {
                const message = JSON.parse(err.request.response).message;
                response.message = message;
                toast.error(message);
            });
    } catch (error) {
        response.message = 'Something Went Wrong !';
        toast.error(error);
    }

    response.isLoading = false;
    dispatch({ type: Types.AUTH_LOGIN_CHECK, payload: response });
};


export const registerSubmitAction = (postData) => async(dispatch) => {
    let response = {
        status: false,
        message: "",
        isLoading: true,
        access_token: null,
        userData: null,
        errors: []
    };
    dispatch({ type: Types.AUTH_REGISTER_SUBMIT, payload: response });

    try {
        await Axios.post(`${process.env.REACT_APP_API_URL}auth/register`, postData)
            .then((res) => {
                const { data, message, status } = res.data;
                const { access_token, user } = data;
                response.message = message;
                response.status = status;
                if (response.status) {
                    response.access_token = access_token;
                    // Store it to local storage
                    localStorage.setItem('is_logged_in', true);
                    localStorage.setItem('access_token', access_token);
                    localStorage.setItem('userData', JSON.stringify(user));
                    toast.success(response.message);
                }
            })
            .catch((err) => {
                const errorsResponse = JSON.parse(err.request.response);
                if (Object.entries(errorsResponse.errors)[0].length > 0) {
                    const message = errorsResponse.message;
                    response.message = message;
                    response.errors = errorsResponse.errors;
                    toast.error(message);
                } else {
                    const message = JSON.parse(err.request.response).message;
                    response.message = message;
                    toast.error(message);
                }
            });
    } catch (error) {
        response.message = 'Something Went Wrong !';
        toast.error(error);
    }

    response.isLoading = false;
    dispatch({ type: Types.AUTH_REGISTER_SUBMIT, payload: response });
};

export const logoutAction = () => async(dispatch) => {
    let response = {
        status: false,
        message: "",
        isLoading: true,
    };
    dispatch({ type: Types.AUTH_POST_LOGOUT, payload: response });

    try {
        localStorage.removeItem('is_logged_in');
        localStorage.removeItem('access_token');
        localStorage.removeItem('userData');
        toast.success('Logged out successfully !');
        if (typeof window !== 'undefined') {
            window.loction.href = "/auth/login";
        }

    } catch (error) {
        response.message = 'Something Went Wrong !';
        toast.error(error);
    }
    response.isLoading = false;
    dispatch({ type: Types.AUTH_POST_LOGOUT, payload: response });
};
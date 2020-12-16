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
                    // Store it to local storage
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
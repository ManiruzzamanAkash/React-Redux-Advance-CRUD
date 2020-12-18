import Axios from "axios";
import { toast } from 'react-toastify';

import * as Types from "../types/Types";

export const handleChangePostInputAction = (name, value) => (dispatch) => {
    let data = {
        name: name,
        value: value,
    }
    dispatch({ type: Types.CHANGE_REGISTER_INPUT, payload: data });
};

export const getPostsAction = (postData) => async(dispatch) => {
    let response = {
        posts: [],
        status: false,
        message: "",
        isLoading: true,
        errors: []
    };
    dispatch({ type: Types.POST_LIST_DASHBOARD, payload: response });

    try {
        await Axios.get(`${process.env.REACT_APP_API_URL}products/view/all`, postData)
            .then((res) => {
                const { data, message, status } = res.data;
                response.status = status;
                response.posts = data.data;
                response.isLoading = false;
            })
            .catch((err) => {
                toast.error(err);
            });
    } catch (error) {
        response.message = 'Something Went Wrong !';
        toast.error(error);
    }

    response.isLoading = false;
    dispatch({ type: Types.POST_LIST_DASHBOARD, payload: response });
};

export const storeNewPost = (postData) => async(dispatch) => {
    let response = {
        posts: [],
        status: false,
        message: "",
        isLoading: true,
        errors: []
    };
    dispatch({ type: Types.CREATE_POST, payload: response });

    try {
        await Axios.post(`${process.env.REACT_APP_API_URL}products`, postData)
            .then((res) => {
                const { data, message, status } = res.data;
                response.status = status;
                response.posts = data.data;
                response.isLoading = false;
            })
            .catch((err) => {
                toast.error(err);
            });
    } catch (error) {
        response.message = 'Something Went Wrong !';
        toast.error(error);
    }

    response.isLoading = false;
    dispatch({ type: Types.CREATE_POST, payload: response });
};
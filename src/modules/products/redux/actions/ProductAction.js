import Axios from "axios";
import { toast } from 'react-toastify';
import { generateFormDataFromObject } from "../../../master/utils/FileHelper";
import { showToast } from "../../../master/utils/ToastHelper";

import * as Types from "../types/Types";

export const handleChangeProductInputAction = (name, value, e) => (dispatch) => {
    let data = {
        name: name,
        value: value,
    }
    dispatch({ type: Types.CHANGE_PRODUCT_INPUT, payload: data });

    if (name === 'image') {
        let reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            data.name = 'imagePreviewUrl';
            data.value = reader.result;
            dispatch({ type: Types.CHANGE_PRODUCT_INPUT, payload: data });
        }
        reader.readAsDataURL(file)
    }

};

export const deleteProductImagePreview = () => (dispatch) => {
    let data = {
        name: 'imagePreviewUrl',
        value: null,
    }
    dispatch({ type: Types.CHANGE_PRODUCT_INPUT, payload: data });
};

export const getProductsAction = (page, searchText = null) => async(dispatch) => {
    let response = {
        products: [],
        status: false,
        message: "",
        isLoading: true,
        errors: []
    };
    dispatch({ type: Types.PRODUCT_LIST_DASHBOARD, payload: response });
    let url = '';
    if (searchText === null) {
        url = `${process.env.REACT_APP_API_URL}products/view/all?page=${page}`;
    } else {
        url = `${process.env.REACT_APP_API_URL}products/view/search?search=${searchText}`
    }

    try {
        await Axios.get(url)
            .then((res) => {
                const { data, message, status } = res.data;
                response.status = status;
                response.products = data.data;
                response.productsPaginatedData = data;
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
    dispatch({ type: Types.PRODUCT_LIST_DASHBOARD, payload: response });
};

export const emptyProductMessage = () => (dispatch) => {
    dispatch({ type: Types.EMPTY_PRODUCT_MESSAGE, payload: null });
};

export const storeNewProduct = (postData) => async(dispatch) => {
    let response = {
        products: [],
        status: false,
        message: "",
        isLoading: true,
        errors: []
    };
    const formData = generateFormDataFromObject(postData);
    dispatch({ type: Types.CREATE_PRODUCT, payload: response });

    try {
        await Axios.post(`${process.env.REACT_APP_API_URL}products`, formData)
            .then((res) => {
                const { data, message, status } = res.data;
                response.status = status;
                response.products = data.data;
                response.isLoading = false;
                response.message = message;
                showToast('success', message);
            })
            .catch((err) => {
                toast.error(err);
                showToast('error', err);
            });
    } catch (error) {
        response.message = 'Something Went Wrong !';
        toast.error(error);
    }

    response.isLoading = false;
    dispatch({ type: Types.CREATE_PRODUCT, payload: response });
};
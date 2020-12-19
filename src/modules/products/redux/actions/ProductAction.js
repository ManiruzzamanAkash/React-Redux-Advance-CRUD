import Axios from "axios";
import { toast } from 'react-toastify';
import { generateFormDataFromObject } from "../../../master/utils/FileHelper";
import { showToast } from "../../../master/utils/ToastHelper";

import * as Types from "../types/Types";

export const handleChangeProductInputAction = (name, value, e, isEdit = false) => (dispatch) => {
    let data = {
        name: name,
        value: value,
    }
    const type = !isEdit ? Types.CHANGE_PRODUCT_INPUT : Types.CHANGE_PRODUCT_INPUT_UPDATE;
    dispatch({ type: type, payload: data });

    if (name === 'image') {
        let reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            data.name = 'imagePreviewUrl';
            data.value = reader.result;
            dispatch({ type: type, payload: data });
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
                response.message = message;
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


export const getProductDetailAction = (product_id, isEdit = false) => async(dispatch) => {
    let response = {
        isLoading: true,
        productDetail: null
    };
    dispatch({ type: !isEdit ? Types.PRODUCT_DETAIL : Types.EDIT_PRODUCT_INFO, payload: response });
    const url = `${process.env.REACT_APP_API_URL}products/${product_id}`

    try {
        await Axios.get(url)
            .then((res) => {
                response.productDetail = res.data.data;
                response.productDetail.image = null;
                response.productDetail.imagePreviewUrl = res.data.data.image_url;
                if (isEdit) {
                    response.user = null;
                }
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
    dispatch({ type: !isEdit ? Types.PRODUCT_DETAIL : Types.EDIT_PRODUCT_INFO, payload: response });
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
            .then(res => {
                if (typeof res !== 'undefined') {
                    const { data, message, status } = res.data;
                    response.status = status;
                    response.products = data.data;
                    response.isLoading = false;
                    response.message = message;
                    showToast('success', message);
                } else {
                    showToast('error', 'Please check the file inputs and try again !');
                }
            })
            .catch(err => {
                const errorsResponse = JSON.parse(err.request.response);
                if (Object.entries(errorsResponse.errors)[0].length > 0) {
                    const message = errorsResponse.message;
                    response.message = message;
                    response.errors = errorsResponse.errors;
                    showToast('error', err);
                } else {
                    const message = JSON.parse(err.request.response).message;
                    response.message = message;
                    showToast('error', err);
                }
            });
    } catch (error) {
        response.message = 'Something Went Wrong !';
        toast.error(error);
    }

    response.isLoading = false;
    dispatch({ type: Types.CREATE_PRODUCT, payload: response });
};

export const updateProductAction = (postData, id) => async(dispatch) => {
    let response = {
        products: [],
        status: false,
        message: "",
        isLoading: true,
        errors: []
    };
    const formData = generateFormDataFromObject(postData);
    dispatch({ type: Types.EDITING, payload: true });
    try {
        await Axios.post(`${process.env.REACT_APP_API_URL}products/${id}?_method=PUT`, formData)
            .then(res => {
                if (typeof res !== 'undefined') {
                    const { data, message, status } = res.data;
                    response.status = status;
                    response.products = data.data;
                    response.isLoading = false;
                    response.editing = false;
                    response.message = message;
                    showToast('success', message);
                } else {
                    showToast('error', 'Please check the file inputs and try again !');
                }
            })
            .catch(err => {
                const errorsResponse = JSON.parse(err.request.response);
                if (Object.entries(errorsResponse.errors)[0].length > 0) {
                    const message = errorsResponse.message;
                    response.message = message;
                    response.errors = errorsResponse.errors;
                    showToast('error', err);
                } else {
                    const message = JSON.parse(err.request.response).message;
                    response.message = message;
                    showToast('error', err);
                }
            });
    } catch (error) {
        response.message = 'Something Went Wrong !';
        toast.error(error);
    }

    response.isLoading = false;
    dispatch({ type: Types.UPDATE_PRODUCT, payload: response });
};


export const deleteProductAction = (id) => async(dispatch) => {
    let response = {
        status: false,
        message: "",
        isLoading: true,
        errors: [],
        product: null
    };
    dispatch({ type: Types.DELETING, payload: true });
    try {
        await Axios.delete(`${process.env.REACT_APP_API_URL}products/${id}`)
            .then((res) => {
                const { data, message, status } = res.data;
                response.status = status;
                response.isLoading = false;
                response.editing = false;
                response.message = message;
                response.product = data;
                showToast('success', message);
            })
            .catch((err) => {
                showToast('error', err);
            });
    } catch (error) {
        response.message = 'Something Went Wrong !';
        toast.error(error);
    }

    response.isLoading = false;
    dispatch({ type: Types.DELETE_PRODUCT, payload: response });
};
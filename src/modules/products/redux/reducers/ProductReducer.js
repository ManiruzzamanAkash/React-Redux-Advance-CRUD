import * as Types from "../types/Types";

// Initial state
const initialState = {
    products: [],
    productsPaginatedData: null,
    isLoading: false,
    productData: {
        id: 0,
        title: '',
        description: '',
        price: '',
        image: null,
        imagePreviewUrl: null
    },
    productEditData: null,
    productDetail: null,
    errors: [],
    addStatus: false,
    editStatus: false,
    editing: false,
    deleteStatus: false,
    deleting: false,

    addMessage: '',
    editMessage: '',
    deleteMessage: '',
};

const ProductReducer = (state = initialState, action) => {
    const newState = {...state };

    switch (action.type) {
        case Types.PRODUCT_LIST_DASHBOARD:
            return {
                ...state,
                products: action.payload.products,
                productsPaginatedData: action.payload.productsPaginatedData,
                isLoading: action.payload.isLoading
            };

        case Types.CHANGE_PRODUCT_INPUT:
            const productData = {...state.productData };
            productData[action.payload.name] = action.payload.value;
            return {
                ...state,
                productData
            };

        case Types.CHANGE_PRODUCT_INPUT_UPDATE:
            const productEditData = {...state.productEditData };
            productEditData[action.payload.name] = action.payload.value;
            return {
                ...state,
                productEditData
            };

        case Types.PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload.productDetail,
                isLoading: action.payload.isLoading,
            };

        case Types.EDIT_PRODUCT_INFO:
            return {
                ...state,
                productEditData: action.payload.productDetail,
                isLoading: action.payload.isLoading,
            };

        case Types.CREATE_PRODUCT:
            return {
                ...state,
                addMessage: action.payload.message,
                addStatus: action.payload.status,
                isLoading: action.payload.isLoading,
            };

        case Types.UPDATE_PRODUCT:
            return {
                ...state,
                editMessage: action.payload.message,
                editStatus: action.payload.status,
                editing: action.payload.editing,
                isLoading: action.payload.isLoading,
            };

        case Types.DELETE_PRODUCT:
            // Remove that product from this list
            const prodPaginatedData = {...state.productsPaginatedData };
            const updateProductData = prodPaginatedData.data.splice(prodPaginatedData.data.findIndex(function(i) {
                return i.id === action.payload.product.id;
            }), 1);
            prodPaginatedData.data = updateProductData;
            return {
                ...state,
                deleteMessage: action.payload.message,
                deleteStatus: action.payload.status,
                deleting: action.payload.deleting,
                isLoading: action.payload.isLoading,
                productsPaginatedData: prodPaginatedData
            };

        case Types.LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        case Types.EDITING:
            return {
                ...state,
                editing: action.payload,
            };

        case Types.DELETING:
            return {
                ...state,
                deleting: action.payload,
            };

        case Types.EMPTY_PRODUCT_MESSAGE:
            return {
                ...state,
                addMessage: null,
                editMessage: null,
                deleteMessage: null,
                productData: {
                    id: 0,
                    title: '',
                    description: '',
                    price: '',
                    image: null,
                    imagePreviewUrl: null
                }
            };

        default:
            break;
    }
    return newState;
};

export default ProductReducer;
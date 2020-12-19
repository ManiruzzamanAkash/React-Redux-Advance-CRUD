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
    productDetail: null,
    errors: [],
    addStatus: false,
    editStatus: false,
    deleteStatus: false,

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

        case Types.PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload.productDetail,
                isLoading: action.payload.isLoading,
            };

        case Types.CREATE_PRODUCT:
            return {
                ...state,
                addMessage: action.payload.message,
                addStatus: action.payload.status,
                isLoading: action.payload.isLoading,
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
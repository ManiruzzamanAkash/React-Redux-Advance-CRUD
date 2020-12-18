import * as Types from "../types/Types";

// Initial state
const initialState = {
    products: [],
    isLoading: false,
    inputData: {
        title: '',
        description: '',
        price: '',
        image: ''
    },
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
                isLoading: action.payload.isLoading
            };

        case Types.CHANGE_PRODUCT_INPUT:
            const inputData = {...state.inputData };
            inputData[action.payload.name] = action.payload.value;
            return {
                ...state,
                inputData
            };

        default:
            break;
    }
    return newState;
};

export default ProductReducer;
import * as Types from "../types/Types";

// Initial state
const initialState = {
    posts: [],
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

const PostReducer = (state = initialState, action) => {
    const newState = {...state };

    switch (action.type) {
        case Types.POST_LIST_DASHBOARD:
            return {
                ...state,
                posts: action.payload.posts,
                isLoading: action.payload.isLoading
            };

        case Types.CHANGE_POST_INPUT:
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

export default PostReducer;
import * as Types from "../types/Types";

// Initial state
const initialState = {
    isLoggedIn: false,
    authUserData: {},
    authTokenData: {},
    loginMessage: "",
    registerMessage: "",
    isLoading: false,
    submitLogout: false
};

const AuthReducer = (state = initialState, action) => {
    const newState = {...state };

    switch (action.type) {
        case Types.AUTH_LOGIN_CHECK:
            return {
                ...state,
                isLoggedIn: action.payload.status,
                authUserData: action.payload.userData,
                authTokenData: action.payload.tokenData,
                loginMessage: action.payload.message,
                isLoading: action.payload.isLoading
            };

        default:
            break;
    }
    return newState;
};

export default AuthReducer;
import * as Types from "../types/Types";

// Initial state
const initialState = {
    isLoggedIn: false,
    authUserData: null,
    authTokenData: null,
    loginMessage: "",
    registerMessage: "",
    isLoading: false,
    submitLogout: false,
    loginData: {
        email: '',
        password: '',
    },
    registerData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    },
    errors: []
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

        case Types.AUTH_REGISTER_SUBMIT:
            return {
                ...state,
                isLoggedIn: action.payload.status,
                authUserData: action.payload.userData,
                authTokenData: action.payload.tokenData,
                loginMessage: action.payload.message,
                isLoading: action.payload.isLoading,
                errors: action.payload.errors
            };

        case Types.CHANGE_LOGIN_INPUT:
            const loginData = {...state.loginData };
            loginData[action.payload.name] = action.payload.value;
            return {
                ...state,
                loginData
            };

        case Types.CHANGE_REGISTER_INPUT:
            const registerData = {...state.registerData };
            registerData[action.payload.name] = action.payload.value;
            return {
                ...state,
                registerData
            };

        case Types.GET_AUTH_DATA:
            return {
                ...state,
                isLoggedIn: action.payload.status,
                authUserData: action.payload.userData,
                authTokenData: action.payload.tokenData,
            };

        case Types.AUTH_POST_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                loginMessage: action.payload.message
            };

        default:
            break;
    }
    return newState;
};

export default AuthReducer;
import * as Types from "../types/Types";

// Initial state
const initialState = {
    isLoggedIn: false,
    authUserData: {},
    authTokenData: {},
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

        default:
            break;
    }
    return newState;
};

export default AuthReducer;
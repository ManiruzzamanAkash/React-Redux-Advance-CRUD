import { combineReducers } from "redux";
import AuthReducer from "../modules/auth/redux/reducers/AuthReducer";

const RootReducer = combineReducers({
    auth: AuthReducer
});

export default RootReducer;
import { combineReducers } from "redux";
import AuthReducer from "../modules/auth/redux/reducers/AuthReducer";
import ProductReducer from "../modules/products/redux/reducers/ProductReducer";

const RootReducer = combineReducers({
    auth: AuthReducer,
    product: ProductReducer,
});

export default RootReducer;
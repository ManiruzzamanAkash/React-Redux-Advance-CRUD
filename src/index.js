import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import { ToastContainer, toast } from 'react-toastify';
// import LocalStorageService from "./services/LocalStorageService";

// Mandatory CSS
import 'react-toastify/dist/ReactToastify.css';

import App from "./App";

// Import reducer
import { Provider } from "react-redux";

// Import Store
import Store from "./redux/Store";

// Import axios.js so that it can inject token in every request
require('./services/axios');

toast.configure();

// Import Local storage to get access tokens
// const localStorageService = LocalStorageService.getService();

ReactDOM.render( <
    Provider store = { Store } >
    <
    HttpsRedirect >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter> <
    /HttpsRedirect> <
    ToastContainer / >
    <
    /Provider>,
    document.getElementById("root")
);
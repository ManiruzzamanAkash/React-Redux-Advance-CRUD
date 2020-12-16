import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import { ToastContainer, toast } from 'react-toastify';
// import LocalStorageService from "./services/LocalStorageService";

import App from "./App";

// Import reducer
import { Provider } from "react-redux";


// Import Store
// import Store from "./redux/backend/Store";

// Import axios.js so that it can inject token in every request
// require ('./services/axios');

toast.configure();

// Import Local storage to get access tokens
// const localStorageService = LocalStorageService.getService();

ReactDOM.render(
  <>
    <HttpsRedirect>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </HttpsRedirect>
    <ToastContainer />
  </>,
  document.getElementById("root")
);

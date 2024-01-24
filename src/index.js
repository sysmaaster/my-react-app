//import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
/*
{
  <React.StrictMode>   </React.StrictMode> 
}
reportWebVitals();*/

import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "./base.css";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.querySelector("#root")
);

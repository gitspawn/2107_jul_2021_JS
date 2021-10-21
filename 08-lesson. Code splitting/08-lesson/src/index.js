import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom/";

import ThemeContext from "./context/themeContext";

import "./base.css";

import App from "./components/App";

ReactDom.render(
    <BrowserRouter>
        <ThemeContext.Provider value="dark">
            <App />
        </ThemeContext.Provider>
    </BrowserRouter>,

    document.querySelector("#root")
);

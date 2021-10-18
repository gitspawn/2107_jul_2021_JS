import React from "react";
import { Link } from "react-router-dom";

import notFoundImage from "../assets/pusheen.jpg";

let styles = {
    container: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    status: {
        fontSize: 46,
    },
};

export default function NotFound() {
    return (
        <div style={styles.container}>
            <h3 style={styles.status}>404</h3>
            <img src={notFoundImage} alt="image_not_found" />
            <p>
                Такой страницы не существует
                <Link to="/"> Вернуться на главную</Link>
            </p>
        </div>
    );
}

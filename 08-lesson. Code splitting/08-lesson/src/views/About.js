import React from "react";

import ThemeContext from "../context/themeContext";

export default function About(props) {
    let { history, location, match } = props;

    console.log(location.pathname);

    return (
        <div>
            <h3>About page</h3>
            <p>About page content</p>
            <ThemeContext.Consumer>
                {(ctx) => {
                    return <h1>{ctx}</h1>;
                }}
            </ThemeContext.Consumer>
        </div>
    );
}

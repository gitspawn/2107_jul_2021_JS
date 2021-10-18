import React from "react";

export default function About(props) {
    let { history, location, match } = props;

    // console.log(history);
    console.log(location.pathname);
    // console.log(match);
    // console.log(props.match.path);
    // console.log(props.match.url);
    return (
        <div>
            <h3>About page</h3>
            <p>Hello from about page</p>
        </div>
    );
}

import React from "react";

export default function Home(props) {
    let { history, location, match } = props;
    // console.log(location);
    console.log(location.pathname);
    return (
        <div>
            <h2>Home page</h2>
            <p>Content from home page</p>
        </div>
    );
}

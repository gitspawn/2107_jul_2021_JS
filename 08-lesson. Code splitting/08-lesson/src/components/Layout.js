import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const styles = {
    maxWidth: 1170,
    marginLeft: "auto",
    marginRight: "auto",
    paddingRight: 12,
    paddingLeft: 12,
};

const Layout = ({ children }) => (
    <div style={styles}>
        <Navigation />
        {children}
        <Footer />
    </div>
);

export default Layout;

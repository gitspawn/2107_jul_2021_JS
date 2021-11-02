import React, { Component } from "react";
import Layout from "./Layout";
import Tasks from "./Tasks";

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Tasks />
            </Layout>
        );
    }
}

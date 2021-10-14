import React, { Component } from "react";
import axios from "axios";

import ArticleList from "./ArticlesList";
import Notification from "./Notification";
import Spinner from "./Spinner";

export default class App extends Component {
    state = {
        articles: [],
        error: false,
        loading: false,
    };

    componentDidMount() {
        this.setState({ loading: true });

        axios
            .get("http://hn.algolia.com/api/v1/search?query=covid")
            .then((response) => {
                console.log(response);
                this.setState({
                    articles: response.data.hits,
                    // loading: false,
                });
            })
            .catch((error) => {
                // console.log(error.message);

                this.setState({
                    error,
                    // loading: false
                });
            })
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        let { articles, loading, error } = this.state;
        let errorMSG = `Shit hepens...${error.message}`;

        return (
            <div>
                <h1>https://hn.algolia.com/api</h1>
                {loading && <Spinner message="Loading..." />}
                {error && <Notification message={errorMSG} />}
                {articles.length > 0 && <ArticleList articles={articles} />}
            </div>
        );
    }
}

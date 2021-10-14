import React, { Component } from "react";
import axios from "axios";

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
                this.setState({
                    error,
                    // loading: false
                });
            })
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        let { articles, loading } = this.state;

        let articlesItems = articles.map(({ objectID, title, url }) => (
            <li key={objectID}>
                <a href={url} target="_blank">
                    {title}
                </a>
            </li>
        ));

        return (
            <div>
                <h1>https://hn.algolia.com/api</h1>

                {/* true ? Loading ? Разметка */}

                {loading ? <div>Loading...</div> : <ul>{articlesItems}</ul>}
            </div>
        );
    }
}

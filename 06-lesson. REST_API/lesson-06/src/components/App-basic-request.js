import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
    state = {
        articles: [],
        error: false,
    };

    componentDidMount() {
        axios
            .get("http://hn.algolia.com/api/v1/search?query=covid")
            .then((response) => {
                console.log(response);
                this.setState({ articles: response.data.hits });
            })
            .catch((error) => {
                this.setState({ error });
            });
    }

    render() {
        let { articles } = this.state;

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
                {<ul>{articlesItems}</ul>}
            </div>
        );
    }
}

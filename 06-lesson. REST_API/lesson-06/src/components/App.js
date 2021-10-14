import React, { Component } from "react";
import axios from "axios";

import ArticleList from "./ArticlesList";
import SearchForm from "./SearchForm";
import Notification from "./Notification";
import Spinner from "./Spinner";

import arcticlesApi from "../services/arcticlesApi";
// arcticlesApi = { fetchArticlesWithAutor, fetchArticlesWithQuery };

export default class App extends Component {
    state = {
        articles: [],
        error: false,
        loading: false,
        searchQuery: "",
        page: 0,
    };

    // componentDidMount() {
    //     console.log(arcticlesApi);
    //     console.log(arcticlesApi.fetchArticlesWithQuery());

    //     this.setState({ loading: true });

    //     axios
    //         .get("http://hn.algolia.com/api/v1/search?query=covid")
    //         .then((response) => {
    //             // console.log(response);
    //             this.setState({
    //                 articles: response.data.hits,
    //                 // loading: false,
    //             });
    //         })
    //         .catch((error) => {
    //             // console.log(error.message);

    //             this.setState({
    //                 error,
    //                 // loading: false
    //             });
    //         })
    //         .finally(() => this.setState({ loading: false }));
    // }

    // componentDidMount() {
    //     this.fetchArticles();
    // }

    componentDidUpdate(prevProps, prevState) {
        // console.log("prevState", prevState);
        let prevQuery = prevState.searchQuery;
        let currentQuery = this.state.searchQuery;

        if (prevQuery !== currentQuery) {
            console.log("Можно делать запрос");

            this.fetchArticles();
        }
    }

    fetchArticles = () => {
        let { searchQuery, page } = this.state;
        arcticlesApi
            .fetchArticlesWithQuery(searchQuery, page)
            .then((articles) => {
                this.setState((prevState) => {
                    return {
                        articles: [...prevState.articles, ...articles],
                        page: prevState.page + 1,
                    };
                });
            });
    };

    // fetchArticles = () => {
    //     let { searchQuery, page } = this.state;
    //     arcticlesApi.fetchArticlesWithQuery(searchQuery).then((articles) => {
    //         this.setState({
    //             articles: articles
    //         });
    //     });
    // };

    handleSearchForm = (query) => {
        // console.log("inputValue form", query);
        this.setState({
            searchQuery: query,
        });
    };

    render() {
        let { articles, loading, error } = this.state;
        let errorMSG = `Shit hepens...${error.message}`;

        return (
            <div>
                <h1>https://hn.algolia.com/api</h1>
                <SearchForm onSubmit={this.handleSearchForm} />
                {loading && <Spinner message="Loading..." />}
                {error && <Notification message={errorMSG} />}
                {articles.length > 0 && <ArticleList articles={articles} />}

                {articles.length > 0 && !loading && (
                    <button type="button" onClick={this.fetchArticles}>
                        Load more...
                    </button>
                )}
            </div>
        );
    }
}

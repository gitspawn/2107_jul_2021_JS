import React, { Component } from "react";
import { Link } from "react-router-dom";
import tvApi from "../services/tv-api";
// import queryString from "query-string";
import getQueryParams from "../utils/getQueryParams";

import SearchForm from "../components/SearchForm";

export default class Shows extends Component {
    state = {
        shows: [],
    };

    componentDidMount() {
        let { query } = getQueryParams(this.props.location.search);
        if (query) {
            return this.fetchShows(query);
        }

        this.fetchShows("batman");
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("prevProps", prevProps);
        let { query: prevQuery } = getQueryParams(prevProps.location.search);
        let { query: currentQuery } = getQueryParams(
            this.props.location.search
        );

        // console.log("prevQuery", prevQuery);
        // console.log("currentQuery", currentQuery);

        if (prevQuery !== currentQuery) {
            this.fetchShows(currentQuery);
        }
    }

    fetchShows = (query) => {
        tvApi.fetchShowWithQuery(query).then((shows) => {
            this.setState({ shows });
        });
    };

    handleChangeQuery = (searchQuery) => {
        // console.log("searchQuery", searchQuery);
        // tvApi.fetchShowWithQuery(searchQuery).then((shows) => {
        //     this.setState({ shows });
        // });
        // console.log(this.props.location.search);
        // let queryParams = queryString.parse(this.props.location.search);
        // console.log(queryParams);

        // console.log(this.props.history.push("/"));

        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${searchQuery}`,
        });
    };

    render() {
        let { shows } = this.state;
        let { match } = this.props;

        return (
            <div>
                <h1>Shows list</h1>
                <SearchForm onSubmit={this.handleChangeQuery} />
                <ul>
                    {shows.length > 0 &&
                        shows.map(({ id, image, name }) => (
                            <li key={id}>
                                {/* <Link to={`${match.url}/${id}`}> */}
                                <Link
                                    to={{
                                        pathname: `${match.url}/${id}`,
                                        state: {
                                            from: this.props.location,
                                        },
                                    }}
                                >
                                    <h2>{name}</h2>
                                    <img src={image.medium} alt={name} />
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

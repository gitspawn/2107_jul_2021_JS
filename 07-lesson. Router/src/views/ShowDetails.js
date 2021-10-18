import React, { Component } from "react";
import tvApi from "../services/tv-api";

import parse from "html-react-parser";

export default class ShowDetails extends Component {
    state = {
        show: null,
    };

    componentDidMount() {
        tvApi.fetchShowDetails(this.props.match.params.showID).then((show) => {
            this.setState({ show });
        });
    }

    render() {
        let { show } = this.state;

        return (
            <div>
                {show && (
                    <>
                        <h3>{show.name}</h3>
                        <img src={show.image.medium} alt={show.name} />
                        <p>{show.summary}</p>
                        <p>{parse(show.summary)}</p>

                        <a href={show.url}>Go to website</a>
                    </>
                )}
            </div>
        );
    }
}

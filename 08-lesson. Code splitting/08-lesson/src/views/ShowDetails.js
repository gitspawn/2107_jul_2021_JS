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

    handleGoBack = () => {
        // console.log(this.props.location.state.from);
        if (this.props.location.state && this.props.location.state.from) {
            this.props.history.push(this.props.location.state.from);
        }
    };

    render() {
        let { show } = this.state;

        return (
            <div>
                <button type="button" onClick={this.handleGoBack}>
                    Go back
                </button>
                {show && (
                    <>
                        <h3>{show.name}</h3>
                        <img src={show.image.medium} alt={show.name} />
                        <p>{show.summary}</p>
                        {/* <p>{parse(show.summary)}</p> */}

                        <a href={show.url}>Go to website</a>
                    </>
                )}
            </div>
        );
    }
}

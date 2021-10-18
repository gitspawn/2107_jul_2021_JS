import React, { Component } from "react";

import { Link } from "react-router-dom";

import tvApi from "../services/tv-api";

// tvApi.fetchShowDetails()
// tvApi.fetchShowWithQuery()

export default class Shows extends Component {
    state = {
        shows: [],
    };

    componentDidMount() {
        tvApi.fetchShowWithQuery("cat").then((shows) => {
            // console.log(shows);
            this.setState({ shows });
        });
    }

    render() {
        let { shows } = this.state;
        // console.log(this.props.match);

        return (
            <div>
                <h1>Shows list</h1>
                <ul>
                    {shows.length > 0 &&
                        shows.map(({ id, image, name }) => (
                            <li key={id}>
                                {/* <Link to={`/shows/${id}`}> */}
                                <Link to={`${this.props.match.url}/${id}`}>
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

// import React from "react";

// export default function Shows() {
//     const shows = [
//         { id: "id-1", name: "Shows name 1" },
//         { id: "id-2", name: "Shows name 2" },
//         { id: "id-3", name: "Shows name 3" },
//         { id: "id-4", name: "Shows name 4" },
//     ];

//     return (
//         <div>
//             <h1>Shows list</h1>
//             <ul>
//                 {shows.map(({ id, name }) => (
//                     <li key={id}>{name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

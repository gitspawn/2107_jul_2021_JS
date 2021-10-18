import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <ul>
            <li>
                <NavLink
                    className="Navigation-link"
                    activeClassName="Navigation-link-active"
                    to="/"
                    exact
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="Navigation-link"
                    activeClassName="Navigation-link-active"
                    to="/about"
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="Navigation-link"
                    activeClassName="Navigation-link-active"
                    to="/shows"
                >
                    Shows
                </NavLink>
            </li>
        </ul>
    );
}

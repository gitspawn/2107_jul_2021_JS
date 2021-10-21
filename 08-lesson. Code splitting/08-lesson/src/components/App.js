import React from "react";
import Layout from "./Layout";

import { Route, Switch } from "react-router-dom";

import routes from "../routes";

import Home from "../views/Home";
import About from "../views/About";
import Shows from "../views/Shows";
import ShowDetails from "../views/ShowDetails";

import NotFound from "../views/NotFound";

export default function App() {
    return (
        <Layout>
            <Switch>
                <Route path={routes.home} exact component={Home} />
                <Route path={routes.about} component={About} />
                <Route path={routes.shows} exact component={Shows} />
                <Route path={routes.showDetails} component={ShowDetails} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    );
}

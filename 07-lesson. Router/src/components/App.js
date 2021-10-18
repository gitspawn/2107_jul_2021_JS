import React from "react";
import Layout from "./Layout";

import { Route, Switch, Redirect, Link } from "react-router-dom";

import routes from "../routes";

import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../views/Home";
import About from "../views/About";
import Shows from "../views/Shows";
import ShowDetails from "../views/ShowDetails";

import NotFound from "../views/NotFound";

export default function App() {
    return (
        <Layout>
            <Navigation />
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

// export default function App() {
//     return (
//         <Layout>
//             {/* <ul>
//                 <li>
//                     <a href="/">Home</a>
//                 </li>
//                 <li>
//                     <a href="/about">About</a>
//                 </li>
//                 <li>
//                     <a href="/shows">Shows</a>
//                 </li>
//             </ul> */}

//             {/* <ul>
//                 <Link to="/">Home</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/shows">Shows</Link>
//             </ul> */}
//             <Navigation />
//             <Switch>
//                 <Route path="/" exact component={Home} />
//                 <Route path="/about" component={About} />
//                 <Route path="/shows" exact component={Shows} />
//                 <Route path="/shows/:showID" component={ShowDetails} />
//                 <Route component={NotFound} />
//                 {/* <Redirect to="/" /> */}
//             </Switch>
//             {/* <Footer /> */}
//         </Layout>
//     );
// }

// (/ !== /about)

/*
https://mysite.com/books/ertd324fda?category=fantasy&status=avialable#documents
https://mysite.com/about
https://mysite.com/
https://mysite.com/contacts

URI - https://mysite.com/books/ertd324fda?category=fantasy&status=avialable#documents
URL - https://mysite.com
URN - /books/ertd324fda?category=fantasy&status=avialable#documents


https - протокол
mysite.com - хост
books/ertd324fda - путь где мы находимя в приложении
books - статический параметр
ertd324fda - диначмический параметр
? - начало строки запроса
category=fantasy - параметр и значение запроса
& - разделяет параметры запроса
#documents - якорь (хеш), опредеяет положение на странице

*/

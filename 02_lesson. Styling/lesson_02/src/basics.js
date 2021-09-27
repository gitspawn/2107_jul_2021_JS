import React, { Component } from "react";
import ReactDOM from "react-dom";

// React.createElement(type, [props], [...children]);

// let props = {
//     href: "https://tproger.ru/translations/configure-webpack4/",
//     target: "_blank",
// };

// props:
// children: "tproger.ru"
// href: "https://tproger.ru/translations/configure-webpack4/"
// target: "_blank"

// let link = React.createElement("a", props, "tproger.ru");
// console.log(link);
// ReactDOM.render(link, document.querySelector("#root"));

// ================================================

// let title = React.createElement("h2", null, "Pizza carbonara");
// let price = React.createElement("p", {}, "Price 15$");
// let button = React.createElement("button", { type: "button" }, "Add to cart");
// let image = React.createElement("img", {
//     src: "https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     alt: "pizza carbonara",
//     width: 500,
// });

// // let product = React.createElement("div", null, title, button, price, image);

// let product = React.createElement("div", {
//     children: [title, button, price, image],
// });

// ReactDOM.render(product, document.querySelector("#root"));

// =====================================
// Components and Props and JSX

// let imageUrl =
//     "https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

// let imageAlt = 'pizza carbonara" />';

// let Product = (props) => {
//     // let { hello, age } = props;

//     // console.log(hello);
//     // console.log(age);

//     // JSX
//     return (
//         <div>
//             {/* <h1>{2 + 2}</h1> */}
//             <h2>{props.name}</h2>
//             <p>Price {props.price + 5}$</p>
//             <p>Price {props.price}$</p>
//             <button type="button">Add to cart</button>
//             <img src={imageUrl} alt={imageAlt} width="400" />
//         </div>
//     );
// };

// ReactDOM.render(
//     // <Product name="Pizza carbonara" price="20" />,
//     <Product name="Pizza carbonara" price={20} />,
//     document.querySelector("#root")
// );

// =====================================
// Components Composition
// let Product = (props) => {
//     return (
//         <React.Fragment>
//             <h2>{props.name}</h2>
//             <p>Price {props.price + 5}$</p>
//         </React.Fragment>
//     );
// };

let Product = (props) => {
    return (
        <>
            <h2>{props.name}</h2>
            <p>Price {props.price + 5}$</p>

            <button type="button">Add to cart</button>
            <img src={props.imageUrl} alt={props.name} width="400" />
        </>
    );
};

let App = (props) => {
    return (
        <div>
            <Product
                name="Pizza carbonara"
                price={20}
                imageUrl="https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <hr />
            <Product
                name="Kebab"
                price={10}
                imageUrl="https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

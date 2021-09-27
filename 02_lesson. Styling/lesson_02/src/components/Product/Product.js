import React from "react-dom";
import PropTypes from "prop-types";
// import "./Product.css";
// import "./Product";

// CSS Modules
import styles from "./Product.module.css";

// console.log(stylesFromCSSModule);
// console.log(styles.qty);
// console.log(styles.price);
// console.log(styles.container);
// console.log(styles.name);
// console.log(styles["not-awaliable"]);
// console.log(styles.notAwaliable);

let Product = ({ name, price, imageUrl, qty }) => {
    let isInstock = qty < 50;

    let quantityClases = !isInstock ? styles.notAwaliable : styles.awaliable;

    // console.log(quantityClases);
    // let finalClass = quantityClases.join(" ");
    let finalClass = quantityClases;
    // console.log(finalClass);

    return (
        <div>
            <h2 className={"Product__name"}>{name}</h2>
            <p className={"Product__price"}>Price {price + 5}$</p>
            <button type="button">Add to cart</button>
            <img src={imageUrl} alt={name} width="400" />

            {/* if ... else */}

            {/* <p>
                Available:{" "}
                <span className={quantityClases.join(" ")}>
                    {isInstock ? "Few left" : "In stock"}
                </span>
            </p> */}

            <p>
                Available:{" "}
                <span className={finalClass}>
                    {isInstock ? "Few left" : "In stock"}
                </span>
            </p>
        </div>
    );
};

// ===============================================================
// Vanila CSS
// let Product = ({ name, price, imageUrl, qty }) => {
//     let isInstock = qty < 50;

//     // 1. IF...ELSE
//     // let quantityClases = ["Product__qty"];
//     // if (isInstock) {
//     //     quantityClases.push("awaliable");
//     // } else {
//     //     quantityClases.push("not-awaliable");
//     // }

//     // 2.Ternary operator
//     // let quantityClases = ["Product__qty"];
//     // quantityClases.push(isInstock ? "awaliable" : "not-awaliable");

//     // 3. Ternary + push + join
//     let quantityClases = [
//         "Product__qty",
//         isInstock ? "awaliable" : "not-awaliable",
//     ].join(" ");

//     // console.log(quantityClases);
//     // let finalClass = quantityClases.join(" ");
//     let finalClass = quantityClases;
//     // console.log(finalClass);

//     return (
//         <div>
//             <h2 className={"Product__name"}>{name}</h2>
//             <p className={"Product__price"}>Price {price + 5}$</p>
//             <button type="button">Add to cart</button>
//             <img src={imageUrl} alt={name} width="400" />

//             {/* if ... else */}

//             {/* <p>
//                 Available:{" "}
//                 <span className={quantityClases.join(" ")}>
//                     {isInstock ? "Few left" : "In stock"}
//                 </span>
//             </p> */}

//             <p>
//                 Available:{" "}
//                 <span className={finalClass}>
//                     {isInstock ? "Few left" : "In stock"}
//                 </span>
//             </p>
//         </div>
//     );
// };

Product.defaultProps = {
    imageUrl:
        "https://media.istockphoto.com/photos/3d-word-oops-picture-id1067573454",
};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
};

export default Product;

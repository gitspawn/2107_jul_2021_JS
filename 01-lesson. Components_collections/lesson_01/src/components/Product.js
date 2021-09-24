import React from "react-dom";
import PropTypes from "prop-types";

let Product = (props) => {
    let { name, price, imageUrl, qty } = props;

    return (
        <>
            <h2>{name}</h2>
            <p>Price {price + 5}$</p>
            <button type="button">Add to cart</button>
            <img src={imageUrl} alt={props.name} width="400" />

            {/* if ... else */}
            <p>
                Available:
                <b> {qty < 50 ? "Few left" : "In stock"}</b>
            </p>
        </>
    );
};

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

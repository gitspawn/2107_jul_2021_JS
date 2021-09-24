import React from "react";
import PropTypes from "prop-types";

function BookList(props) {
    let { books } = props;

    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <b>{book.title}</b>
                </li>
            ))}
        </ul>
    );
}

// BookList.defaultProps = {};

//   // An array of a certain type
//   optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

// An object taking on a particular shape
//   optionalObjectWithShape: PropTypes.shape({
//     optionalProperty: PropTypes.string,
//     requiredProperty: PropTypes.number.isRequired
//   }),

BookList.propTypes = {
    book: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};

export default BookList;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// console.log(styled);

let List = styled.ul`
    margin: 0;
    padding: 0;
    color: yellow;
`;

let ListItem = styled.li`
    background: gray;
    margin: 20px;
    list-style: none;
`;

function BookList(props) {
    let { books } = props;

    return (
        <List>
            {books.map(({ id, title }) => (
                <ListItem key={id}>{title}</ListItem>
            ))}
        </List>
    );
}

BookList.propTypes = {
    book: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};

export default BookList;

// function BookList(props) {
//     let { books } = props;

//     return (
//         <ul>
//             {books.map((book) => (
//                 <li key={book.id}>
//                     <b>{book.title}</b>
//                 </li>
//             ))}
//         </ul>
//     );
// }

// BookList.propTypes = {
//     book: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             title: PropTypes.string.isRequired,
//         })
//     ),
// };

// export default BookList;

import React from "react-dom";
import PropTypes from "prop-types";

let Section = (props) => {
    let { title, children } = props;

    return (
        <>
            <hr />
            <section>
                {/* {console.log(title)} */}

                {/* if */}
                {title && <h1>{title}</h1>}
                {children}
            </section>
        </>
    );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;

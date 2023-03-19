import React from 'react';
import PropTypes from "prop-types";

const Card = (props) => {
    const {children,isFeatured,className}=props
    return (
      <div
      className={`card${isFeatured?' card--featured':''}${className? ' '+ className:''}`}
      >
          {children}
      </div>
    );
};

export default Card;

Card.propTypes={
    children:PropTypes.node.isRequired,
    isFeatured:PropTypes.bool,
    className:PropTypes.string,
}
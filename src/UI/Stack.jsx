import React from 'react';
import PropTypes from "prop-types";

const Stack = (props) => {
    const {children,pos}=props
    return (
      <div className={'stack'} style={{
          justifyContent:pos==='center'?'center':`flex-${pos}`
      }}>
          {children}
      </div>
    );
};

export default Stack;
Stack.propTypes={
    children:PropTypes.node.isRequired
}
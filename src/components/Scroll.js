import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflow: 'scroll', height: '500px', border: 'solid 1px black', margin: 'auto'}}>
      {props.children}
    </div>
  );
}

export default Scroll;

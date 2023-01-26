import React from 'react';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default React.memo(DemoOutput);
/*
It tells to react to check the previous props with the new one, and only re-render this component if a prop is changed
*/

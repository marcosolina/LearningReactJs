import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button running');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
/*
In this case we have a "gotcha". Although we are using
memo, the function that we receive as props, it is re-created
at every re-render, hence it's a different.
For these cases we can use "useCallback"
 */

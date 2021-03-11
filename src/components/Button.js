import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const Buttons = ({ classes, value, onClick }) => (
  <Button className={classes} onClick={() => onClick()}>
    {value}
  </Button>
);
// Valudation
Button.prototype = {
  value: PropTypes.string,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
//Default Value
Button.defaultProps = {
  variant: 'contained',
};

///////// How to use  ///////////
// 1. Import Button
// 2.  <Buttons onClick={handleClick} value={"CLick me"} color="primary" />
// 3. add the props like above
export default Buttons;

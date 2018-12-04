import React from 'react';

const Button = props => 
  <button
    className="btn btn-lg btn-primary btn-block"
    type={props.type}
    onClick={props.onclick} >
      {props.text}
  </button>

export default Button;
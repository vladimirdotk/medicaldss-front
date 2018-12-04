import React from 'react';

const Header = props => 
  <header className="app-header">
    <h1 className="h3 mb-3 font-weight-normal">
      {props.name}
    </h1>
  </header>

export default Header;
import React from 'react';

const InfoBlock = props => 
  <header className="app-header">
    <div className="mt-5 mb-3 text-muted">
      {props.text}
    </div>
  </header>

export default InfoBlock;
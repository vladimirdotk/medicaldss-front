import React from 'react';
import './Loader.css';
import Button from './Button';

const Results = props => 
  <React.Fragment>
    <br/>
    <br/>
    <div className="font-weight-normal h4">Вариант коагулопатии:</div>
    <div className="font-weight-normal">{props.text}</div>
    <br/>
    <br/>
    <Button type="submit" text="Назад" onclick={props.handleBack}/>
  </React.Fragment>

export default Results;
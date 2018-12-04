import React from 'react';
import predictors from './Predictors.jpg'
import classificationFunctions from './ClassificationFunctions.jpg';

const ImgBlock = props => 
  <React.Fragment>
    <a href={predictors}>Предикторы</a>
    <br/>
    <a href={classificationFunctions}>Функции кассификации</a>
  </React.Fragment>

export default ImgBlock;
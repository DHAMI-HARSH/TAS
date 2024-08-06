import React from 'react';
import './display.css'

const Display = ({ formData = {} }) => {
 
  const { first = 'No data', second = 'No data', num = 'No data', mail = 'No data' } = formData;
  
  return (
    <>
      <div className="mainD" id='container'>DISPLAY DATA</div>
      <div className="display">
        <h2>Form Data:</h2>
        <p>First Name: {first}</p>
        <p>Last Name: {second}</p>
        <p>Number: {num}</p>
        <p>Email: {mail}</p>
      </div>
    </>
  );
};

export default Display;
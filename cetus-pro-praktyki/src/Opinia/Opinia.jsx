// Opinia.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Opinia.css';  // Importowanie pliku stylów

const Opinia = (props) => {
  return (
    <div className="opinia-container">
      <div className="opinia-header">
        <div className="opinia-info">
          <h2>{props.nauczyciel}</h2>
          <p>{props.data}</p>
        </div>
        <div className="ocena">
          <p>Ocena: {props.ocena}/5</p>
        </div>
      </div>
      <div className="opinia-info">
        <p><b>Przedmiot:</b> {props.przedmiot}</p>
      </div>
      <div className="opinia-tresc">
        <p>{props.tresc}</p>
      </div>
    </div>
  );
};


export default Opinia;

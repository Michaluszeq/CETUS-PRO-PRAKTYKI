// Opinia.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Opinia.css';  // Importowanie pliku stylów

const Opinia = ({ nazwaNauczyciela, przedmiot, ocena, komentarz, data }) => {
  return (
    <div className="opinia-container">
      <div className="opinia-header">
        <div className="opinia-info">
          <h2>{nazwaNauczyciela}</h2>
          <p>{data}</p>
        </div>
        <div className="ocena">
          <p>Ocena: {ocena}/5</p>
        </div>
      </div>
      <div className="opinia-info">
        <p>Przedmiot: {przedmiot}</p>
      </div>
      <div className="opinia-tresc">
        <p>{komentarz}</p>
      </div>
    </div>
  );
};

Opinia.propTypes = {
  nazwaNauczyciela: PropTypes.string.isRequired,
  przedmiot: PropTypes.string.isRequired,
  ocena: PropTypes.number.isRequired,
  komentarz: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default Opinia;

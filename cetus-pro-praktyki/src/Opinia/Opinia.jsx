// Opinia.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Opinia.css';  // Importowanie pliku stylów

const Opinia = ({ nazwaNauczyciela, przedmiot, ocena, komentarz, data }) => {
  return (
    <div className="opinia-container">
      <div className="opinia-header">
        <div className="opinia-info">
          <h2>Stanisław Królikowski</h2>
          <p>09092137</p>
        </div>
        <div className="ocena">
          <p>Ocena: 5/5</p>
        </div>
      </div>
      <div className="opinia-info">
        <p><b>Przedmiot:</b> szbd</p>
      </div>
      <div className="opinia-tresc">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi asperiores delectus cumque? Harum sit magnam consequuntur cupiditate animi facilis mollitia fugiat, voluptas quia excepturi sint atque eius hic est accusamus?</p>
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

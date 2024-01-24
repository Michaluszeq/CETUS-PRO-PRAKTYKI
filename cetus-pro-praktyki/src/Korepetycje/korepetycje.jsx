import React, { useState, useEffect } from 'react';
import './korepetycje.css';

function Korepetycje(props) {
  

  

  return (
    <div className="korepetycje-container">
     
      <div className="korepetycje-list">
        
          <div key={props.id} className="korepetycja-card">
            <h2>{props.temat}</h2>
            <p>{props.opis}</p>
            <p>Cena: {props.cena} zł</p>
            Kontakt:{props.kontakt}
            autor:{props.autor}
            klasa:{props.klasa}
          </div>
      
      </div>
    </div>
  );
}

export default Korepetycje;

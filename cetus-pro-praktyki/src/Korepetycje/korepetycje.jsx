import React from 'react';
import './korepetycje.css';

function Korepetycje(props) {
  return (
    <div className="korepetycja-card">
      <div className="korepetycja-header">
        <h2 className="korepetycja-title">{props.temat}</h2>
        <p className="korepetycja-price"><strong>Cena:</strong> {props.cena} zł</p>
      </div>
      <div className="korepetycja-content">
        <p className="korepetycja-description">{props.opis}</p>
      </div>
      <div className="korepetycja-footer">
        <p><strong>Autor:</strong> {props.autor}</p>
        <p><strong>Klasa:</strong> {props.klasa}</p>
        
      </div>
      <div className='korepetycje-kontakt'>
        <p><strong>Kontakt:</strong> {props.kontakt}</p>
      </div>
    </div>
  );
}

export default Korepetycje;

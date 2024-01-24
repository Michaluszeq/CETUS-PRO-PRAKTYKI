import React, { useState, useEffect } from 'react';
import './korepetycje.css';

function Korepetycje() {
  const [korepetycjeData, setKorepetycjeData] = useState([]);

  useEffect(() => {
    // Tutaj możesz umieścić kod do pobierania danych z bazy danych
    // Przykład: fetch('URL_do_api/korepetycje').then(response => response.json()).then(data => setKorepetycjeData(data));
  }, []); // Użyj pustej tablicy jako drugi argument, aby useEffect wykonał się tylko raz przy montowaniu komponentu

  return (
    <div className="korepetycje-container">
      <h1>Lista Korepetycji</h1>
      <div className="korepetycje-list">
        {korepetycjeData.map(korepetycja => (
          <div key={korepetycja.id} className="korepetycja-card">
            <h2>{korepetycja.temat}</h2>
            <p>{korepetycja.opis}</p>
            <p>Cena: {korepetycja.cena} zł</p>
            {/* Dodaj więcej informacji o korepetycji, jeśli są dostępne */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Korepetycje;

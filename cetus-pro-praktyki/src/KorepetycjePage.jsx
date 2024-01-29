import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';
import Korepetycje from './Korepetycje/korepetycje';
import './KorepetycjePage.css'; // Importuj plik ze stylami

export default function KorepetycjePage() {
  const [myArray, setMyArray] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:5213/studybuddy/corepetitions", requestOptions)
    .then(response => response.json())
    .then(result => {
      setMyArray(result);
    })
    .catch(error => console.log('error', error));
  }, []);

  return (
    <div className='korepetycje-page'>
      <Baner />
      <div className='korepetycje-container'>
        <h1>Lista Korepetycji</h1>
        <div className='korepetycje-list'>
          {myArray.map(item => (
            <Korepetycje
              key={item.id} // Dodaj unikalny klucz dla każdej korepetycji
              temat={item.subject}
              opis={item.description}
              cena={item.price}
              autor={item.author}
              klasa={item.class}
              kontakt={item.contact}
            />
          ))}
        </div>
      </div>
      <BottomBaner />
    </div>
  );
}

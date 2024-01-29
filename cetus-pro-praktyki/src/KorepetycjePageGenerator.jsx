import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';
import Korepetycje from './Korepetycje/korepetycje';
import './KorepetycjePage.css'; // Importuj plik ze stylami

export default function KorepetycjePage(props) {
    const [opinions, setOpinions] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchOpinions = async () => {
        try {
          const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
  
          const url = `http://localhost:5213/studybuddy/opinionskox?subject=${props.what}`;
          const response = await fetch(url, requestOptions);
          if (!response.ok) {
            throw new Error('Failed to fetch opinions');
          }
          const data = await response.json();
          setOpinions(data);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchOpinions();
    }, [props.what]);
  

  return (
    <div className='korepetycje-page'>
        <div className='korepetycje-list'>
          {opinions.map(item => (
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
  );
}

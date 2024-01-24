import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';

import Korepetycje from './Korepetycje/korepetycje';

export default function KorepetycjePage() {
  const [myArray, setMyArray] = useState([]);

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

  
  
  return (
    <div className='korepetycje'>
        <Baner/>
        <h1>Lista Korepetycji</h1>
        {myArray.map(item => (
        <Korepetycje
        temat={item.subject}
        opis={item.description}
        cena={item.price}
        autor={item.author}
        klasa={item.class}
        kontakt={item.contact} />
      ))}
      <BottomBaner/>
      
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import './adverts.css';
import Advert from '../advert/Advert';

function App() {
  const [myArray, setMyArray] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:5213/studybuddy/books", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result[1]['title']);
        setMyArray(result);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className='advertsContent'>
      {myArray.map(item => (
        <Advert
          tytul={item.title}
          opis={item.description}
          nrtel={item.contact}
          cena={item.price}
          sprzedawca={item.author}
          ocena={item.mark}
          img={item.pictureURL}
        />
      ))}
    </div>
  );
}

export default App;


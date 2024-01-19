import React, { useState, useEffect } from 'react';
import Opinia from '../src/Opinia/Opinia';
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';
import OpionionForm from '../src/OpinionForm/OpinionForm'; 
import './App.css';

const OpiniaPage = () => {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:5213/studybuddy/opinion", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setOpinions(result);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div>
      <Baner />
      <div className='OpinionContainer'>
        
        
        <h1>Opinie o nauczycielach</h1>
        {opinions.map(opinion => (
          <Opinia
            nauczyciel={opinion.teacher}
            data={opinion.data}
            ocena={opinion.mark}
            przedmiot={opinion.subject}
            tresc={opinion.description}
          />
        ))}
      </div>
      <BottomBaner />
    </div>
  );
};

export default OpiniaPage;

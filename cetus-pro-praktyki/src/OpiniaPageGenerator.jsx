import React, { useState, useEffect } from 'react';
import Opinia from '../src/Opinia/Opinia';
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';

import './App.css';
import './OpiniaPageShortForm.jsx';

const OpiniaPage = (props) => {
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
    <div className='generatedContainer'>

      {opinions.map(opinion => (
        <Opinia
          key={opinion.id} // Add a unique key prop
          nauczyciel={opinion.teacher}
          data={opinion.data}
          ocena={opinion.mark}
          przedmiot={opinion.subject}
          tresc={opinion.description}
        />
      ))}
    </div>
  );
};

export default OpiniaPage;

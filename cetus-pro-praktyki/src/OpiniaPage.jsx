import React, { useState } from 'react';
import Opinia from '../src/Opinia/Opinia';
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';
import Generator from './OpiniaPageGenerator.jsx';
import './OpiniaPageShortForm.jsx';

const OpiniaPage = () => {
  const [opinions, setOpinions] = useState(""); // Initialize opinions state

  const option = {
    width: '70%',
    height:'35px',
    radius:'30px'
  };

  // Function to handle generating opinions
  const generateOpinions = () => {
    const selectedOpinion = document.getElementById("przedmiot").value;
    setOpinions(selectedOpinion); // Update opinions state
  }

  return (
    <div>
      <Baner />
      <div className='OpinionContainer'>
        <select style={option} name="" id="przedmiot">
          <option value="J.Polski">J.Polski</option>
          <option value="J.Niemiecki">J.Niemiecki</option>
          <option value="J.Angielski">J.Angielski</option>
          <option value="WF">WF</option>
          <option value="Biologia">Biologia</option>
          <option value="Chemia">Chemia</option>
          <option value="Fizyka">Fizyka</option>
          <option value="Geografia">Geografia</option>
          <option value="Historia">Historia</option>
          <option value="Matematyka">Matematyka</option>
          <option value="Religia">Religia</option>
          <option value="Programowanie">Programowanie</option>
        </select>
        <button onClick={generateOpinions}>Wybierz</button>
        
        <h1>Opinie o nauczycielach</h1>
        <Generator what={opinions} />
      </div>
      <BottomBaner />
    </div>
  );
};

export default OpiniaPage;

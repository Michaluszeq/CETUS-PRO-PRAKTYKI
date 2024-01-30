import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';
import Korepetycje from './Korepetycje/korepetycje';
import './KorepetycjePage.css'; // Importuj plik ze stylami
import Generator from './KorepetycjePageGenerator';

export default function KorepetycjePage() {
  const [opinions, setOpinions] = useState(""); // Initialize opinions state

  const option = {
    width: '35%',
    height:'35px',
    radius:'30px'
  };

  // Function to handle generating opinions
  const getCorepetitions = () => {
    const selectedOpinion = document.getElementById("przedmiot").value;
    setOpinions(selectedOpinion); // Update opinions state
  }

  return (
    <div className='korepetycje-page'>
      <Baner />
        <div className='top'>
        <select style={option} name="" id="przedmiot">
                        <option value="J.Polski">J.Polski</option>
                        <option value="J.Niemiecki">J.Niemiecki</option>
                        <option value="J.Angielski">J.Angielski</option>
                        <option value="wf">WF</option>
                        <option value="Biologia">Biologia</option>
                        <option value="Chemia">Chemia</option>
                        <option value="Fizyka">Fizyka</option>
                        <option value="Geografia">Geografia</option>
                        <option value="Historia">Historia</option>
                        <option value="Matematyka">Matematyka</option>
                        <option value="Religia">Religia</option>
                        <option value="Programowanie">Programowanie</option>
                    </select>
                    <button onClick={getCorepetitions}>Wybierz</button>
        </div>
      <div className='korepetycje-container'>
        <h1>Lista Korepetycji</h1>
        <div className='korepetycje-list'>
          <Generator what={opinions}/>
        </div>
      </div>
      {/* <BottomBaner /> */}
    </div>
  );
}
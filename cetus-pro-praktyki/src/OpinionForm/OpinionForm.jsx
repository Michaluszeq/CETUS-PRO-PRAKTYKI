import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2'; // Import SweetAlert

import '../OpinionForm/OpinionForm.css';

export default function App() {
  const navigate = useNavigate(); // Use useNavigate hook

  function addOpinion() {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const data = new Date();
    var dataDzisiejsza = data.getDate() + '.' + (data.getMonth() + 1) + '.' + data.getFullYear();

    var przedmiot = document.getElementById('przedmiot').value;
    var nauczyciel = document.getElementById('nauczyciel').value;
    var ocena = document.getElementById('ocena').value;
    var opinia = document.getElementById('opinia').value;

    var raw = JSON.stringify({
      author: '',
      teacher: nauczyciel,
      subject: przedmiot,
      mark: ocena,
      data: dataDzisiejsza,
      description: opinia,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:5213/studybuddy/opinion?subject=Bazy danych', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        Swal.fire({
          title: 'Success!',
          text: 'Opinia dodana pomyślnie!',
          icon: 'success',
          timer: 2000, // 2 seconds
          showConfirmButton: false,
        }).then(() => {
          // Redirect to another site after 2 seconds
          navigate('/opinie');
        });
      })
      .catch((error) => console.log('error', error));
  }

  const option = {
    width: '70%',
    height:'35px',
    radius:'30px'
};

  return (
    <div className="FormContainer">
      <h2>Dodaj opinię</h2>
      <h3>Przedmiot:</h3>
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
      <h3>Nauczyciel:</h3>
      <input id="nauczyciel" type="text" />
      <h3>Opinia:</h3>
      <textarea id="opinia" name="" cols="30" rows="5"></textarea>
      <h3>Ocena:</h3>
      <input defaultValue="1" id="ocena" type="number" min={1} max={5} />

      <button onClick={addOpinion}>Dodaj Opinię</button>
      <Link className='Link' to="/">Powrót do strony głównej</Link>
    </div>
  );
}

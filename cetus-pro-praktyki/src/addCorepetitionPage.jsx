import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

export default function AddPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const AddToBD = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var zdjecie = document.getElementById('zdjecie').value;
    var tytul = title;
    var ocena = document.getElementById('ocena').value;

    var raw = JSON.stringify({
      mark: ocena,
      title: tytul,
      description: content,
      author: 'autor',
      price: price,
      contact: contact,
      pictureUrl: zdjecie,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:5213/studybuddy/gallery', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        Swal.fire({
          title: 'Success!',
          text: 'Ogłoszenie dodane pomyślnie!',
          icon: 'success',
          timer: 2000, // 2 seconds
          showConfirmButton: false,
        }).then(() => {
          // Redirect to another site after 2 seconds
          navigate('/gielda');
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Wystąpił błąd podczas dodawania ogłoszenia.',
          icon: 'error',
        });
        console.log('error', error);
      });
  };

  return (
    <div className="add-page-container">
      <h2>Dodaj ofertę korepetycji</h2>
      <form>
      <div className="form-group">
          <label>Przedmiot:</label>
          <input id='przedmiot' type="text"   />
        </div>

        <div className="form-group">
          <label>Treść:</label>
          <textarea value={content} id='opis' onChange={handleContentChange}></textarea>
        </div>

        <div className="form-group">
          <label>Cena:</label>
          <input type="number" id="cena" onChange={handlePriceChange}></input>
        </div>

        <div className="form-group">
          <label>Korepetytor:</label>
          <input id='autor' ></input>
        </div>

        

        <div className="form-group">
          <label>Nr telefonu:</label>
          <input  id='kontakt' value={contact} onChange={handleContactChange} />
        </div>

        <div className="form-group">
          <label>Klasa:</label>
          <input  id='klasa'  />
        </div>


        <button type="button" onClick={AddToBD}>
          Dodaj Ogłoszenie
        </button>
        <Link to="/">Powrót do strony głównej</Link>
      </form>
    </div>
  );
}

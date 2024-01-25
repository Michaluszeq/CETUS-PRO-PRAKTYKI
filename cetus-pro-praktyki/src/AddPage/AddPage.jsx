import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import './AddPage.css';

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
      <h2>Dodaj Ogłoszenie</h2>
      <form>
      <div className="form-group">
          <label>Zdjęcie do ogłoszenia(link):</label>
          <input id='zdjecie' type="text"   />
        </div>

        <div className="form-group">
          <label>Tytuł:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>

        <div className="form-group">
          <label>Treść ogłoszenia:</label>
          <textarea value={content} onChange={handleContentChange}></textarea>
        </div>

        <div className="form-group">
          <label>Cena:</label>
          <input type="number" onChange={handlePriceChange}></input>
        </div>

        <div className="form-group">
          <label>Ocena produktu:</label>
          <input type="number" min={1} max={5} id='ocena' ></input>
        </div>

        

        <div className="form-group">
          <label>Nr telefonu:</label>
          <input type="number" min={111111111} max={999999999} value={contact} onChange={handleContactChange} />
        </div>

        <button type="button" onClick={AddToBD}>
          Dodaj Ogłoszenie
        </button>
        <Link to="/">Powrót do strony głównej</Link>
      </form>
    </div>
  );
}

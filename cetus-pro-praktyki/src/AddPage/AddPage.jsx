import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddPage.css';

export default function AddPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [contact, setContact] = useState('');

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

    var tytul = title;

    var raw = JSON.stringify({
      mark: "2",
      title: tytul,
      description: content,
      author: 'cycek',
      price: price,
      contact: contact,
      pictureUrl: 'dawd',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:5213/studybuddy/gallery', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <div className="add-page-container">
      <h2>Dodaj Ogłoszenie</h2>
      <form>
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
          <input type="number" value={price} onChange={handlePriceChange}></input>
        </div>

        <div className="form-group">
          <label>Nr telefonu:</label>
          <input type="number" value={contact} onChange={handleContactChange} />
        </div>

        <button type="button" onClick={AddToBD}>
          Dodaj Ogłoszenie
        </button>
        <Link to="/">Powrót do strony głównej</Link>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './AddPage.css'; // Dodaj plik CSS dla tej strony, jeśli potrzebujesz dodatkowych stylów

export default function AddPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleAddAnnouncement = () => {
    alert(`Dodano ogłoszenie: ${title}\n${content}\nZdjęcia: ${images.map(image => image.name).join(', ')}`);
    // Tutaj możesz dodać logikę wysyłania ogłoszenia (wraz z obrazami) do serwera/API
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
          <textarea onChange={handleContentChange}></textarea>
        </div>
        <div className="form-group">
          <label>Cena:</label>
          <input type='number' value={content} onChange={handleContentChange}></input>
        </div>
        <div className="form-group">
          <label>Nr telefonu:</label>
          <input type="number"  />
        </div>

        {/* <div className="form-group">
          <label>Zdjęcia:</label>
          <input type="file" accept="image/*" multiple onChange={handleImageChange} />
        </div> */}

        <button type="button" onClick={handleAddAnnouncement}>
          Dodaj Ogłoszenie
        </button>
      </form>
    </div>
  );
}
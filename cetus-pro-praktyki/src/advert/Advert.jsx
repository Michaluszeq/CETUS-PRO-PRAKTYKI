// Advert.jsx

import React, { useState } from 'react';
import './Advert.css'; // Importowanie pliku ze stylami
import fb_Logo from '../Icons/fb_Logo.png';
import google_Logo from '../Icons/google_Logo.png';
import apple_Logo from '../Icons/apple_Logo.png';
import Rating from '../Rating';

const Advert = () => {
  const [images, setImages] = useState([fb_Logo, google_Logo, apple_Logo]);
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <div className="advert-container">
      <div className="image-container">
        <button className="prev-button" onClick={handlePrevImage}>&lt;</button>
        <img src={images[currentImage]} alt={`Product ${currentImage + 1}`} />
        <button className="next-button" onClick={handleNextImage}>&gt;</button>
      </div>
      <div className="details-container">
        <div className="left-details">
          <h2>Nazwa Produktu</h2>
          <p>Opis produktu Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p><strong>Cena: 100 zł</strong></p>
        </div>
        <div className="right-details">
          <div className="rating-container">
            <p><strong>Dane Sprzedawcy:</strong> Jan Kowalski</p>
            <p><strong>Numer Telefonu:</strong> 123-456-789</p>
            <div className="rating">
              <Rating stars={5} /> {/* Zaktualizowano na 5 gwiazdek */}
              <span className="seller-rating"><strong>Ocena Sprzedającego:</strong> 4.5/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advert;

import React, { useState } from 'react';
import './TwojeKonto.css';
import {Link} from 'react-router-dom';

const Settings = () => {
  const [profileImage, setProfileImage] = useState('ścieżka_do_obrazka.png');
  const [firstName, setFirstName] = useState('Twoje Imię');
  const [lastName, setLastName] = useState('Twoje Nazwisko');
  const [email, setEmail] = useState('TwójAdresEmail@example.com');
  const [phoneNumber, setPhoneNumber] = useState('Numer Telefonu');
  const [birthdate, setBirthdate] = useState('01/01/2000');

  const handleProfileImageChange = (e) => {
    setProfileImage(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę wysłania danych do serwera lub inną logikę zapisu zmian
    console.log('Dane zostały zaktualizowane:', { profileImage, firstName, lastName, email, phoneNumber, birthdate });
  };

  return (
    <div className="settings-container">
      <h2>Ustawienia Profilu</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Zdjęcie Profilowe:</label>
          <input type="text" placeholder={profileImage} onChange={handleProfileImageChange} />
        </div>
        <div className="form-group">
          <label>Imię:</label>
          <input type="text" placeholder={firstName} onChange={handleFirstNameChange} />
        </div>
        <div className="form-group">
          <label>Nazwisko:</label>
          <input type="text" placeholder={lastName} onChange={handleLastNameChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Numer Telefonu:</label>
          <input type="tel" placeholder={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div className="form-group">
          <label>Data Urodzenia:</label>
          <input type="date" value={birthdate} onChange={handleBirthdateChange} />
        </div>
        <button type="submit">Zapisz zmiany</button>
        <Link to="/">Powrót</Link>
      </form>
    </div>
  );
};

export default Settings;

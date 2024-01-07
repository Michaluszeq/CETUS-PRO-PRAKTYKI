import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [profileImage, setProfileImage] = useState('ścieżka_do_obrazka.png');
  const [lastName, setLastName] = useState('Twoje Nazwisko');
  const [phoneNumber, setPhoneNumber] = useState('Numer Telefonu');

  const handleProfileImageChange = (e) => {
    setProfileImage(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę wysłania danych do serwera lub inną logikę zapisu zmian
    console.log('Dane zostały zaktualizowane:', { profileImage, lastName, phoneNumber });
  };

  return (
    <div className="settings-container">
      <h2>Ustawienia Profilu</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Zdjęcie Profilowe:</label>
          <input type="text" value={profileImage} onChange={handleProfileImageChange} />
        </div>
        <div className="form-group">
          <label>Nazwisko:</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div className="form-group">
          <label>Numer Telefonu:</label>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <button type="submit">Zapisz zmiany</button>
      </form>
    </div>
  );
};

export default Settings;
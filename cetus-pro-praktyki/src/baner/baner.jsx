
import React from 'react';
import MessageIcon from '../Icons/message-icon.png';
import AccountIcon from '../Icons/account-icon.png';

export default function Baner() {
  return (
    <header className="App-header">
    <div className="header-content">
      <h1>StudyBuddy</h1>
      <div className="header-icons">
        <a href="#" className="add-listing-btn">Dodaj Ogłoszenie</a>
        <div className="icon">
          <img src={MessageIcon} alt="Wiadomości" />
          <p className="icon-text">Wiadomości</p>
        </div>
        <div className="icon">
          <img src={AccountIcon} alt="Twoje Konto" />
          <p className="icon-text">Twoje Konto</p>
        </div>
      </div>
    </div>
    </header>
  );
}



   




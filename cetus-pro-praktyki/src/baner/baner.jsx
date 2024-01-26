/* Baner.js */

import React from 'react';
import MessageIcon from '../Icons/message-icon.png';
import AccountIcon from '../Icons/account-icon.png';
import loginIcon from '../Icons/loginIcon.png';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './baner.css'
import StudyBuddyLogo from '../Icons/StudyBuddyLogo.png';

export default function Baner() {

  return (
    <header className="App-header">
      <div className="header-content">
        <Link className="SBContainer" to="/">
          <div className='SBContainer'>
            <img className="SBLogo" src={StudyBuddyLogo} alt="Study Buddy Logo" />
            <h1 className='MainLink'>Studdy Buddy</h1>
          </div>
        </Link>

        <div className="header-icons">
          <Link to="/dodaj-ogloszenie" className="add-listing-btn">Dodaj Ogłoszenie</Link>
          <Link to="/dodaj-opinie" className="add-listing-btn">Dodaj Opinię</Link>
          <Link to="/dodaj-korepetycje" className="add-listing-btn">Dodaj ofertę korepetycji</Link>

          <div className="icons-group">
            <Link to="/wiadomosci" className="icon">
              <img src={MessageIcon} alt="Wiadomości" />
              <p className="icon-text">Wiadomości</p>
            </Link>

            <Link to="/zaloguj" className="icon">
              <img src={loginIcon} alt="Zaloguj" />
              <p className="icon-text">Zaloguj</p>
            </Link>

            <Link to='/twoje-konto' className="icon">
              <img src={AccountIcon} alt="Twoje Konto" />
              <p className="icon-text">Twoje Konto</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

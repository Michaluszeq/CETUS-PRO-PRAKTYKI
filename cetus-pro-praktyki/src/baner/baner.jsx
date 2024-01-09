
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
        <Link to="/">
          
        <h1 className='appTitle'>StudyBuddy</h1>
        </Link>

        <div className="header-icons">
          <Link to="/dodaj-ogloszenie"className="add-listing-btn">Dodaj Ogłoszenie</Link>


          <Link to="/wiadomosci">
          <div className="icon">
            <img src={MessageIcon} alt="Wiadomości" />
            <p className="icon-text">Wiadomości</p>
          </div>
          </Link>




          <Link exact to="/zaloguj"><div className="icon">
            <img src={loginIcon} alt="Zaloguj" />
            <p className="icon-text">Zaloguj</p>
          </div></Link>




          <Link to='/twoje-konto'>
          <div className="icon">
            <img src={AccountIcon} alt="Twoje Konto" />
            <p className="icon-text">Twoje Konto</p>
          </div>
          </Link>

        </div>
      </div>
    </header>
  );
}









import React from 'react';
import MessageIcon from '../Icons/message-icon.png';
import AccountIcon from '../Icons/account-icon.png';
import loginIcon from '../Icons/loginIcon.png';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPanel from "../loginPanel/loginPanel";
import App from '../App';
import MainBody from '../mainBody/mainBody';

export default function Baner() {
  return (
    <header className="App-header">
      <div className="header-content">
        <h1 className='appTitle'>StudyBuddy</h1>

        <div className="header-icons">
          <a href="#" className="add-listing-btn">Dodaj Ogłoszenie</a>



          <div className="icon">
            <img src={MessageIcon} alt="Wiadomości" />
            <p className="icon-text">Wiadomości</p>
          </div>




          <Link  to="/zaloguj"><div className="icon">
            <img src={loginIcon} alt="Zaloguj" />
            <p className="icon-text">Zaloguj</p>
          </div></Link>





          <div className="icon">
            <img src={AccountIcon} alt="Twoje Konto" />
            <p className="icon-text">Twoje Konto</p>
          </div>

        </div>
      </div>
    </header>
  );
}








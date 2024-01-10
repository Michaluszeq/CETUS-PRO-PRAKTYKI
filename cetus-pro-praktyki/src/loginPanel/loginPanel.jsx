import React, { useState } from 'react';
import './loginPanel.css';
import AccountIcon from '../Icons/account-icon.png';
import fb_Logo from '../Icons/fb_Logo.png';
import google_Logo from '../Icons/google_Logo.png';
import apple_Logo from '../Icons/apple_Logo.png';
import Baner from '../baner/baner';
import BottomBaner from '../bottomBaner/bottomBaner';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const LoginPanel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Tutaj dodaj logikę logowania, np. wyślij żądanie do serwera
    console.log('Logowanie...');
  };

  const handleFacebookLogin = () => {
    // Logika logowania przez Facebook
    console.log('Logowanie przez Facebook...');
  };

  const handleGoogleLogin = () => {
    // Logika logowania przez Google
    console.log('Logowanie przez Google...');
  };

  const handleAppleLogin = () => {
    // Logika logowania przez konto Apple
    console.log('Logowanie przez konto Apple...');
  };

  return (
    <div>
    
      <div className="login-panel">
        <h2>Zaloguj się</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />

          <label htmlFor="password">Hasło:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <button type="button" onClick={handleLogin}>
            Zaloguj
          </button>

          <div className="social-login">
            <button type="button" onClick={handleFacebookLogin}>
              <img src={fb_Logo} alt="Facebook Icon" />
              Zaloguj przez Facebook
            </button>
            <button type="button" onClick={handleGoogleLogin}>
              <img src={google_Logo} alt="Google Icon" />
              Zaloguj przez Google
            </button>
            <button type="button" onClick={handleAppleLogin}>
              <img src={apple_Logo} alt="Apple Icon" />
              Zaloguj przez Apple
            </button>
          </div>
        </form>

        <div className="options">
          <p>
            Nie masz konta? <Link to="/zarejestruj">Zarejestruj się</Link>
          </p>
          <p>
             <Link to="/resethasla"> Nie pamiętam hasła </Link>
          </p>
          <Link to="/">
          Powrót
          </Link>
        </div>
      </div>

    </div>
  );
};

export default LoginPanel;

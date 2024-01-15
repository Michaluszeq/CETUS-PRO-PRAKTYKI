import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Dodaj import dla Link
import './registerPanel.css';
import fb_Logo from '../Icons/fb_Logo.png';
import google_Logo from '../Icons/google_Logo.png';
import apple_Logo from '../Icons/apple_Logo.png';

// Reszta kodu...

const RegisterPanel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = () => {
    // Tutaj dodaj logikę rejestracji, np. wyślij żądanie do serwera
    console.log('Rejestracja...');
  };

  const handleFacebookRegister = () => {
    // Logika rejestracji przez Facebook
    console.log('Rejestracja przez Facebook...');
  };

  const handleGoogleRegister = () => {
    // Logika rejestracji przez Google
    console.log('Rejestracja przez Google...');
  };

  const handleAppleRegister = () => {
    // Logika rejestracji przez konto Apple
    console.log('Rejestracja przez konto Apple...');
  };

  return (
    <div className="register-panel">
      <h2>Zarejestruj się</h2>
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

        <label htmlFor="confirmPassword">Potwierdź hasło:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />

        <button type="button" onClick={handleRegister}>
          Zarejestruj się
        </button>

        <div className="social-register">
          <button type="button" onClick={handleFacebookRegister}>
            <img className='icon' src={fb_Logo} alt="Facebook Icon" />
            Zarejestruj przez Facebook
          </button>
          <button type="button" onClick={handleGoogleRegister}>
            <img className='icon' src={google_Logo} alt="Google Icon" />
            Zarejestruj przez Google
          </button>
          <button type="button" onClick={handleAppleRegister}>
            <img className='icon' src={apple_Logo} alt="Apple Icon" />
            Zarejestruj przez Apple
          </button>
          <p>Masz już konto?
          <Link to="/zaloguj"> Zaloguj się</Link>
          </p>
    
          <Link to="/">
          Powrót
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPanel;

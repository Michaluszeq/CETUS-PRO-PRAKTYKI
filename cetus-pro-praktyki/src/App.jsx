import React from 'react';
import './App.css';
import MessageIcon from './Icons/message-icon.png';
import AccountIcon from './Icons/account-icon.png';

const HomePage = () => {
  return (
    <div className="App">
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
      <main>
        <section className="categories">
          <h2>Kategorie</h2>
          {/* Dodaj tutaj elementy kategorii */}
        </section>
        <section className="latest-listings">
          <h2>Najnowsze oferty</h2>
          {/* Dodaj tutaj najnowsze oferty */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 StudyBuddy</p>
      </footer>
    </div>
  );
};

export default HomePage;

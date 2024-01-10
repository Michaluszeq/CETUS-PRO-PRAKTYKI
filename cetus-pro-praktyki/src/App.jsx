import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';
import Main from './Main';
import LoginPage from './LoginPage';
import YourAccount from './YourAccount';

export default function App() {
  const handleSearch = (searchTerm) => {
    // Tutaj możesz umieścić logikę obsługi wyszukiwania
    console.log('Wyszukiwanie:', searchTerm);
  };

  const [szerokosc, setSzerokosc] = useState(window.innerWidth);

  useEffect(() => {
    const aktualizujSzerokosc = () => {
      setSzerokosc(window.innerWidth);
    };

    window.addEventListener('resize', aktualizujSzerokosc);

    // Czyszczenie nasłuchiwacza zdarzeń przy odmontowywaniu komponentu
    return () => {
      window.removeEventListener('resize', aktualizujSzerokosc);
    };
  }, []); // Pusta tablica zależności oznacza, że efekt zostanie uruchomiony tylko raz, po zamontowaniu komponentu

  const szerokoscStylu = {
    width: `${szerokosc}px`,
  };

  return (
    <div style={szerokoscStylu} className="App">
      
    
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/wiadomosci'  />
          <Route path='/zaloguj' element={<LoginPage />} />
          <Route path='/twoje-konto' element={<YourAccount />} />
        </Routes>
      
    </div>
  );
}

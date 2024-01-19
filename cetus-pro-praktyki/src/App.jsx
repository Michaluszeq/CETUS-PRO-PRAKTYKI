import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import BookStore from '../src/bookStore';
import Main from './Main';
import LoginPage from './LoginPage';
import YourAccount from './YourAccount';
import RegisterPanel from './registerPanel/registerPanel';
import AddPage from './AddPage/AddPage';
import OpiniaPage from './OpiniaPage';
import AddOpinionPage from './AddOpinionPage';

export default function App() {
  const handleSearch = (searchTerm) => {
    // Tutaj możesz umieścić logikę obsługi wyszukiwania
    console.log('Wyszukiwanie:', searchTerm);
  };

  const [rozmiarOkna, setRozmiarOkna] = useState({
    szerokosc: window.innerWidth,
    wysokosc: window.innerHeight,
  });

  useEffect(() => {
    const aktualizujRozmiarOkna = () => {
      setRozmiarOkna({
        szerokosc: window.innerWidth,
        wysokosc: window.innerHeight,
      });
    };

    window.addEventListener('resize', aktualizujRozmiarOkna);

    // Czyszczenie nasłuchiwacza zdarzeń przy odmontowywaniu komponentu
    return () => {
      window.removeEventListener('resize', aktualizujRozmiarOkna);
    };
  }, []); // Pusta tablica zależności oznacza, że efekt zostanie uruchomiony tylko raz, po zamontowaniu komponentu

  const rozmiarOknaStyl = {
    width: `${rozmiarOkna.szerokosc}px`,
    height: `${rozmiarOkna.wysokosc}px`,
  };

  return (
    <div style={rozmiarOknaStyl} className="App">
      
        <Routes>
          <Route path='/dodaj-opinie' element={<AddOpinionPage/>}/>
          <Route path='/' element={<Main />} />
          <Route path='/dodaj-ogloszenie' element={<AddPage />} />
          <Route path='/wiadomosci' />
          <Route path='/zaloguj' element={<LoginPage />} />
          <Route path='/twoje-konto' element={<YourAccount />} />
          <Route path='/zarejestruj' element={<RegisterPanel />} />
          <Route path='/gielda' element={<BookStore />} />

          <Route path='/opinie' element={<OpiniaPage />} />
          <Route path='/korepetycje' element={<BookStore />} />
        </Routes>
     
    </div>
  );
}

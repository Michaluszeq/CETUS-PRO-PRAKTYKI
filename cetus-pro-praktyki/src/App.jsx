// App.jsx
import React from 'react';
import SearchBar from '../src/Search/Search'; // Zmiana ścieżki na odpowiednią
import './App.css';
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';
import MainBody from './mainBody/mainBody'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPanel from './loginPanel/loginPanel';
import PlainBackground from './plainBackground/plainBackground'
import Settings from './TwojeKonto/Settings';

export default function App() {
  const handleSearch = (searchTerm) => {
    // Tutaj możesz umieścić logikę obsługi wyszukiwania
     console.log('Wyszukiwaniee:', searchTerm);
  };

  return (
    <div className="App">
      <Routes>
            <Route path='/zaloguj' element={<LoginPanel />} />


            <Route path='/' element={<div><Baner/><SearchBar onSearch={handleSearch} /><BottomBaner/></div>} />
            {/* <Route path='/wiadomosci' /> */}
            <Route path='/twoje-konto' element={<div><Baner/><Settings/><BottomBaner/></div>} />
          </Routes>
    </div>
  );
}

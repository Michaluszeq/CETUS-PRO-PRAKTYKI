// App.jsx
import React from 'react';
import SearchBar from '../src/Search/Search'; // Zmiana ścieżki na odpowiednią
import './App.css';
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';
import MainBody from './mainBody/mainBody'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPanel from './loginPanel/loginPanel';

export default function App() {
  const handleSearch = (searchTerm) => {
    // Tutaj możesz umieścić logikę obsługi wyszukiwania
    console.log('Wyszukiwanie:', searchTerm);
  };

  return (
    <div className="App">
      <Baner />
      <SearchBar onSearch={handleSearch} />
      <Routes>
            
            <Route path='/' element={<h1>witaj</h1>} />
            {/* <Route path='/wiadomosci' /> */}
            <Route path='/zaloguj' element={<LoginPanel />} />//app
            {/* <Route path='/twoje-konto' /> */}
          </Routes>
      <BottomBaner />
    </div>
  );
}

// App.jsx
import React from 'react';
import SearchBar from '../src/Search/Search'; // Zmiana ścieżki na odpowiednią
import './App.css';
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';

export default function App() {
  const handleSearch = (searchTerm) => {
    // Tutaj możesz umieścić logikę obsługi wyszukiwania
    console.log('Wyszukiwanie:', searchTerm);
  };

  return (
    <div className="App">
      <Baner />
      <SearchBar onSearch={handleSearch} />
      <BottomBaner />
    </div>
  );
}

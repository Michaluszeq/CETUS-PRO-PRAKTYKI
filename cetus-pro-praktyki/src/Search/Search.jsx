import React, { useState } from 'react';
import './Search.css'; 

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Wyszukaj..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        <span role="img" aria-label="lupa">
          🔍
        </span>
      </button>
    </div>
  );
};

export default SearchBar;

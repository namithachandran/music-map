// src/SearchBar.js
import React from 'react';

const SearchBar = ({ city, onCityChange }) => {
  const handleInputChange = (e) => {
    onCityChange(e.target.value);
  };

  return (
    <input 
      type="text" 
      value={city} 
      onChange={handleInputChange} 
      placeholder="Enter city" 
    />
  );
};

export default SearchBar;

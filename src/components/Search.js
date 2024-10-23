import React from "react";

const Search = ({ city, setCity, handleCitySearch }) => {
  return (
    <div className="search-section">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleCitySearch}>Search</button>
    </div>
  );
};

export default Search;

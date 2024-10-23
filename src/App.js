import React, { useState, useEffect } from "react";
import { fetchCityFromCoords, fetchLocationFromIP } from "./services/locationService";
import { fetchBandsForCity } from "./services/musicService";
import BandList from "./components/BandList";
import Search from "./components/Search";
import Loader from "./components/Loader";
import './App.css';
import backgroundImage from './assets/pexels.jpg'; 

function App() {
  const [bands, setBands] = useState([]);
  const [city, setCity] = useState("");
  const [searchInput, setSearchInput] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCityFromCoords(
            latitude, 
            longitude, 
            setCity, 
            handleFetchBands, 
            setLocationError
          );
        },
        () => {
          fetchLocationFromIP(setCity, handleFetchBands, setLocationError);
        }
      );
    } else {
      fetchLocationFromIP(setCity, handleFetchBands, setLocationError);
    }
  };

  const handleFetchBands = (cityName) => {
    setLoading(true);
    fetchBandsForCity(
      cityName, 
      (data) => {
        setBands(data);
        setLoading(false); 
      }, 
      (error) => {
        setLocationError(error);
        setLoading(false); 
      }
    );
  };

  const handleCitySearch = () => {
    if (searchInput) {
      setLoading(true); 
      setCity(searchInput);
      handleFetchBands(searchInput); 
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Welcome to Music Map..!!!</h1>
      <h2>Search Your Music Bands</h2>
      {locationError && <p className="error">{locationError}</p>}

      {/* Pass searchInput */}
      <Search city={searchInput} setCity={setSearchInput} handleCitySearch={handleCitySearch} />

      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Display bands only after the city is set after search */}
          {city && <h2>Bands Found in {city}</h2>}
          <BandList bands={bands} city={city} />
        </>
      )}
    </div>
  );
}

export default App;

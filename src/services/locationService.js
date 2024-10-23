// import axios from "axios";

// // Fetch city from latitude and longitude
// export const fetchCityFromCoords = (lat, lon, setCity, fetchBandsForCity, setLocationError) => {
//   axios
//     .get(`https://us1.locationiq.com/v1/reverse.php?key=pk.1c065529ea2afa591b4cfbcd018b443d&lat=${lat}&lon=${lon}&format=json`)
//     .then((response) => {
//       const cityFromCoords = response.data.address.city;
//       setCity(cityFromCoords);
//       fetchBandsForCity(cityFromCoords);
//     })
//     .catch((error) => {
//       console.error("Error fetching city from coordinates:", error);
//       setLocationError("Could not fetch location from coordinates.");
//     });
// };

// // Fetch city based on user's IP address
// export const fetchLocationFromIP = (setCity, fetchBandsForCity, setLocationError) => {
//   axios
//     .get("https://get.geojs.io/v1/ip/geo.json")
//     .then((response) => {
//       const cityFromIP = response.data.city;
//       setCity(cityFromIP);
//       fetchBandsForCity(cityFromIP);
//     })
//     .catch((error) => {
//       console.error("Error fetching location from IP:", error);
//       setLocationError("Could not fetch location from IP.");
//     });
// };

import axios from "axios";

const locationIqApiKey = process.env.REACT_APP_LOCATIONIQ_API_KEY;

// Fetch city from latitude and longitude
export const fetchCityFromCoords = (lat, lon, setCity, fetchBandsForCity, setLocationError) => {
  axios
    .get(`https://us1.locationiq.com/v1/reverse.php?key=${locationIqApiKey}&lat=${lat}&lon=${lon}&format=json`)
    .then((response) => {
      const cityFromCoords = response.data.address.state_district;
      setCity(cityFromCoords);
      fetchBandsForCity(cityFromCoords);
    })
    .catch((error) => {
      console.error("Error fetching city from coordinates:", error);
      setLocationError("Could not fetch location from coordinates.");
    });
};

// Fetch city based on user's IP address
export const fetchLocationFromIP = (setCity, fetchBandsForCity, setLocationError) => {
  axios
    .get("https://get.geojs.io/v1/ip/geo.json")
    .then((response) => {
      const cityFromIP = response.data.city;
      setCity(cityFromIP);
      fetchBandsForCity(cityFromIP);
    })
    .catch((error) => {
      console.error("Error fetching location from IP:", error);
      setLocationError("Could not fetch location from IP.");
    });
};


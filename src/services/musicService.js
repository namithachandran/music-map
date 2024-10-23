import axios from "axios";

// Fetch bands founded in the last 10 years for a given city
export const fetchBandsForCity = (cityName, setBands, setLocationError) => {
  const musicBrainzUrl = `https://musicbrainz.org/ws/2/artist?query=area:${cityName}&limit=50&fmt=json`;
  
  axios.get(musicBrainzUrl)
    .then((response) => {
      const recentBands = response.data.artists.filter((artist) => {
        const foundedDate = artist["life-span"]?.begin;
        return (
          foundedDate && new Date(foundedDate).getFullYear() >= new Date().getFullYear() - 10
        );
      });
      setBands(recentBands);
    })
    .catch((error) => {
      console.error("Error fetching bands:", error);
      setLocationError("Could not fetch bands for the selected city.");
    });
};

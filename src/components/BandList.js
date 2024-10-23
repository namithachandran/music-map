import React from "react";

const BandList = ({ bands, city }) => {
  return (
    <div className="bands-list">
      {bands.length > 0 ? (
        <ul>
          {bands.map((band) => (
            <li key={band.id}>
              <strong>Artist:</strong> {band.name} <br />
              <strong>Area:</strong> {band.area?.name || "Unknown"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bands found for {city}</p>
      )}
    </div>
  );
};

export default BandList;

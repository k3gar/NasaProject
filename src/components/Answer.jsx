import React, { useState } from "react";
import MapImagesList from "./MapImagesList";

import useCoordinatesContext from "../hooks/useCoordinatesContext";

const Answer = () => {
  const { coordinates, setNewCoordinates, clearCoordinates } =
    useCoordinatesContext();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.replace(/\s/g, "").length > 0) {
      const re = /, /;
      let value = inputValue.split(re);
      let lat = value[1];
      let lon = value[0];

      setNewCoordinates(lat, lon, true);
    }
  };

  const handleClear = () => {
    setInputValue("");
    clearCoordinates();
  };

  return (
    <>
      <main>
        <h1>EARTH EXPLORER</h1>
        <div className="main-search_section">
          <form onSubmit={handleSubmit}>
            <input
              name="coordinates"
              type="text"
              id="consult"
              placeholder="Where do you want to go?"
              value={inputValue}
              onChange={handleChange}
            />
            <button type="submit" className="btn-go">
              GO!
            </button>
            <button type="button" className="btn-clear" onClick={handleClear}>
              Clear Searchbox
            </button>
          </form>
        </div>
      </main>

      {coordinates.isListVisible ? <MapImagesList /> : null}
    </>
  );
};

export default Answer;

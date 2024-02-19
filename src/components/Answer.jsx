import React, { useState } from "react";

import MapImagesList from "./MapImagesList";

import { useCoordinatesContext } from "../hooks";
import { areValidCoordinates, isInputValueEmpty } from "../utils";

const Answer = () => {
  const { coordinates, setNewCoordinates, clearCoordinates } =
    useCoordinatesContext();

  const [inputValue, setInputValue] = useState("");
  const [invalidCoordinates, setInvalidCoordinates] = useState(false);

  const handleChange = (e) => {
    if (invalidCoordinates) {
      setInvalidCoordinates(false);
    }

    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isInputValueEmpty(inputValue)) {
      const splitterRegex = /, /;
      let value = inputValue.split(splitterRegex);
      let lon = value[0];
      let lat = value[1];

      if (areValidCoordinates(lon, lat)) {
        setNewCoordinates(lat, lon, true);
      } else {
        setInvalidCoordinates(true);
      }
    }
  };

  const handleClear = () => {
    setInvalidCoordinates(false);
    setInputValue("");
    clearCoordinates();
  };

  return (
    <>
      <main>
        <h1>EARTH EXPLORER</h1>
        <div className="main-search_section">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="coordinates"
                type="text"
                id="consult"
                placeholder="Where do you want to go?"
                className={`${invalidCoordinates ? "input_error" : null}`}
                value={inputValue}
                onChange={handleChange}
              />
              {invalidCoordinates ? (
                <p className="invalid-coordinates_message">
                  Invalid Coordinates, check if you are missing a point: "."
                </p>
              ) : null}
            </div>
            <div>
              <button type="submit" className="btn-go">
                GO!
              </button>
              <button type="button" className="btn-clear" onClick={handleClear}>
                Clear Searchbox
              </button>
            </div>
          </form>
        </div>
      </main>

      {coordinates.isListVisible ? <MapImagesList /> : null}
    </>
  );
};

export default Answer;

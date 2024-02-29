import React, { useState } from "react";

import { constants, dates } from "../utils/constants";
import { coordinatesOnly, validateCoordinates } from "../utils/validators";

import Answer from "./Answer";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const API_URI = constants.API_URI;
  const NASA_API = constants.NASA_ACCESS;

  const renderAnswer = !errorMessage && !isLoading && searchResults.length > 0;

  const parseInput = (input) => {
    const [latitude, longitude] = input.split(",").map(coord => coord.trim());
    return { latitude, longitude };
  };

  const handleInputChange = (e) => {
    const formattedInput = coordinatesOnly(e.target.value);

    setInputValue(formattedInput);
    validateCoordinates(formattedInput, setErrorMessage);
  };

  const fetchData = async (date) => {
    const { longitude, latitude } = parseInput(inputValue);

    try {
      const response = await fetch(`${API_URI}/assets?lon=${longitude}&lat=${latitude}&date=${date}&api_key=${NASA_API}`);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return response.json();
    } catch (error) {
      return error;
    }
  };

  const validateData = (results) => {
    const resultsArray = results.filter(element => element.date);

    if (resultsArray.length === 0) {
      setErrorMessage("There were no entries found for these coordinates, try another.");
    } else {
      setSearchResults(resultsArray);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage("");

    try {
      const results = await Promise.all(dates.map(date => fetchData(date)));

      setIsLoading(false);
      validateData(results);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Failed to fetch data. Please try again later.");
    }
  };

  return (
    <>
      <main>
        <h1>EARTH EXPLORER</h1>
        <div className="main-search_section">
          <input
            type="text"
            placeholder="Enter coordinates (e.g., 12.34, 56.78)"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className={`${ isLoading ? "spinner" : "px-4 py-6 bg-blue-500 text-white rounded-lg focus:outline-none flex justify-center items-center"}`}
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "" : "Explore"}
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </main>
      {renderAnswer && <Answer searchResults={searchResults} />}
    </>
  );
};

export default Main;

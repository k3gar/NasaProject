import React from "react";
import { constants } from "../utils/constants";

const Answer = ({ searchResults, errorMessage }) => {
  const ERROR_IMAGE = constants.ERROR_IMAGE;

  return(
    <div className="search-result">
      <h2>Your Place</h2>
      <div className="search-result-grid">
        {searchResults.map((result, index) => (
          <div className="search-result-data" key={index}>
            { result ? (
              <React.Fragment>
                <p>{result.date}</p>
                {result.msg === "No imagery for specified date." ? (
                  <img src={ERROR_IMAGE} alt="Map Image" />
                ) : (
                  <img src={result.url} alt="Map Image" />
                )}
              </React.Fragment>
            ) : (
              <p>No data available</p>
            )}
          </div>
        ))}
      </div>
  </div>
  );
};

export default Answer;

import React, { useState } from "react";

const Answer = ({ searchResults }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? searchResults.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === searchResults.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Your Place In</h2>
      <div className="max-w-md rounded overflow-hidden shadow-lg">
        {searchResults.map((result, index) => (
          <div
            key={index}
            className={index === currentIndex ? "block" : "hidden"}
          >
            <p className="text-center font-bold italic">{new Date(result.date).getFullYear()}</p>
            <img src={result.url} alt="Satellite Map" className="w-full rounded-full" />
            <div className="flex justify-between mt-4">
              <button onClick={handlePrevious} className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none flex justify-center items-center">Previous</button>
              <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none flex justify-center items-center">Next</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Answer;

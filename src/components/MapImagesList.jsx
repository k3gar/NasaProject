import React, { useEffect, useRef } from "react";

import imagesConfig from "../constants/imagesConfig";

import MapImage from "./MapImage";

const MapImagesList = () => {
  const searchResultFooter = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const { current } = searchResultFooter;
      if (current !== null) {
        current.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);

    return () => clearTimeout(timeout);
  });

  return (
    <div className="search-result">
      <h2>Your Place</h2>
      <div className="search-result_grid">
        {imagesConfig.map((config, id) => (
          <MapImage key={id} config={config} />
        ))}
      </div>
      <div ref={searchResultFooter}></div>
    </div>
  );
};

export default MapImagesList;

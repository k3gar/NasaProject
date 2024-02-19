import { createContext, useState } from "react";

const INITIAL_COORDINATES_STATE = {
  isListVisible: false,
  lat: 0,
  lon: 0,
};

export const coordinatesContext = createContext(undefined);

export const CoordinatesContextProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES_STATE);

  const clearCoordinates = () => setCoordinates(INITIAL_COORDINATES_STATE);

  const setNewCoordinates = (lat, lon, isListVisible) => setCoordinates({ lat, lon, isListVisible });

  return (
    <coordinatesContext.Provider value={{ coordinates, setNewCoordinates, clearCoordinates }}>
      {children}
    </coordinatesContext.Provider>
  );
};

import { useContext } from "react";

import { coordinatesContext } from "../context";

export const useCoordinatesContext = () => {
  const context = useContext(coordinatesContext);

  if (!context) throw new Error("coordinatesContext is not defined");
  return { ...context };
};

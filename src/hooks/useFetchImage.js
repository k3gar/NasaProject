import { useEffect, useState, useCallback } from "react";

import { getImageEndpoint, fallbackImageUrl } from "../constants";
import { useCoordinatesContext } from "../hooks";

export const useFetchImage = (date) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageData, setImageData] = useState(undefined);

  const { coordinates } = useCoordinatesContext();

  const getData = useCallback(async () => {
    if (coordinates.isListVisible) {
      setIsLoading(true);

      try {
        const response = await fetch(
          getImageEndpoint(coordinates.lat, coordinates.lon, date)
        );

        if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setImageData(data);
      } catch (error) {
        setImageData({ date: "Image not found!", url: fallbackImageUrl });
      } finally {
        setIsLoading(false);
      }
    }
  }, [coordinates, date]);

  const clearImageData = () => {
    setImageData(undefined);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return { imageData, isLoading, clearImageData };
};

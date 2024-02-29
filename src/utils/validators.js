export const coordinatesOnly = (input) => {
  return input.replace(/[^0-9\.\-,]/g, "");
};

export const validateCoordinates = (input, setErrorMessage) => {
  const coordinateRegex = /^\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*$/;

  if (input.trim() === "") {
    setErrorMessage("");
  } else if (!coordinateRegex.test(input)) {
    setErrorMessage("Invalid coordinates format");
  } else {
    setErrorMessage("");
  }
};

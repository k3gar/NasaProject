export const validateCoordinate = (input, setErrorMessage) => {
  const coordinateRegex = /^\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*$/;

  if (input.trim() === "") {
    setErrorMessage("");
  } else {
    if (!coordinateRegex.test(input)) {
      setErrorMessage("Invalid coordinates format");
    } else {
      setErrorMessage("");
    }
  }
};

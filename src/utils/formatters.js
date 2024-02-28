export const coordinatesOnly = (input) => {
  return input.replace(/[^0-9\.\-,]/g, "");
};

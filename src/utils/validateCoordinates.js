export const ValidateCoordinates = (coordinates) => {
  const re = /, /
  let value = coordinates.split(re)
  let lat = value[0];
  let long = value[1];
  const floatRegex = new RegExp(/[-]?([0-9]*[.])[0-9]+/);
  return floatRegex.test(long) && floatRegex.test(lat);
};
export const areValidCoordinates = (lon = '', lat = '') => {
  const floatRegex = new RegExp(/[-]?([0-9]*[.])[0-9]+/);
  return floatRegex.test(lon) && floatRegex.test(lat);
};
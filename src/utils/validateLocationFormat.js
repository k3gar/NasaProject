export function validateLocationFormat(str) {
  const regex = /^[0-9,-.]+$/;
  return regex.test(str);
}

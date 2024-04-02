const API_KEY = 'nrvbaThb5ro5VIqRud7Axn0PCirbDXTVorCuWe9Y';
//simplifiqué el llamado a la API en una sola función ya que lo ùnico que cambia es el año y las coordenadas las dará el input del usuario
export const apiRequest = async (lat, long, year) => {
  const data = await fetch(
    `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=${year}-02-01&api_key=${API_KEY}`
  );
  //también reduje la cant de veces que se usa la función del json
  const dataFormated = await data.json();

  return dataFormated;
};

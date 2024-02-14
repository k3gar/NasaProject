let API_URL = process.env.REACT_APP_API_URL;
let API_KEY = process.env.REACT_APP_API_KEY;

export async function getAsset(lat, long, date) {
  return await fetch(
    `${API_URL}/planetary/earth/assets?lon=${long}&lat=${lat}&date=${date}&api_key=${API_KEY}`
  )
    .then((response) => response.json())
    .catch((error) => console.error("Error en getAsset:", error));
}

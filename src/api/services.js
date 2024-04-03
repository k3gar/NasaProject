let API_KEY = "nrvbaThb5ro5VIqRud7Axn0PCirbDXTVorCuWe9Y";

export const getCarouselImgs = async () => {
  let data2 = await fetch(
    `https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`
  );
  let response = await data2.json();

  return response;
};

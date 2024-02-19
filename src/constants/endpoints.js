const apiKey = process.env.REACT_APP_API_KEY || '';

export const getImageEndpoint = (lon, lat, date) => (`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&api_key=${apiKey}`);

export const fallbackImageUrl = 'https://www.mdzol.com/u/fotografias/m/2020/8/6/f850x638-944869_1022358_5050.png';
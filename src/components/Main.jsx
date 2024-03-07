import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';

const Main = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [dataSets, setDataSets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

  const fetchData = async () => {
    console.log(API_KEY)
    if (!latitude || !longitude) {
      setError('Please enter both latitude and longitude.');
      return;
    }

    setIsLoading(true);
    setError('');
    setDataSets([]);

    const years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
    try {
      const results = await Promise.all(years.map(async (year) => {
        const response = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=${year}-02-01&api_key=${API_KEY}`);
        const data = await response.json();
        if (!response.ok || data.error || data.msg === "No imagery for specified date.") {
          return null; 
        }
        return data;
      })).then(results => results.filter(result => result !== null));
      
      setDataSets(results);
      
    } catch (error) {
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <main>
        <h1>EARTH EXPLORER</h1>
        <div className='main-search_section'>
          <input
            type="text"
            placeholder='Latitude'
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            className='input-coord'
          />
          <input
            type="text"
            placeholder='Longitude'
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            className='input-coord'
          />
          <button onClick={fetchData}>GO!</button>
        </div>
        {isLoading && <div className="loading-spinner"></div>}
        {error && <p className="error-message">{error}</p>}
      </main>

      {!isLoading && !error && dataSets.length > 0 && (
        <div className='search-result'>
          <h2>Your Place</h2>
          <ImageCarousel  images={dataSets} />
        </div>
      )}
    </React.Fragment>
  );
}

export default Main;

import React from 'react';

import { NasaCard } from './NasaCard';
import { Carousel } from './Carousel';

const Main = () => {
  const [Lat, setLatitude] = React.useState([29.9792]);
  const [Long, setLongitude] = React.useState([31.1342]);

  async function setCoordenates() {
    const Latitude = document.getElementById('latitude').value;
    const Longitude = document.getElementById('longitude').value;

    setLatitude(Latitude);
    setLongitude(Longitude);
  }
  //simplifiqué el uso del State
  //mejoré la manera de obtener el input del usuario dividiendolo en 2 inputs con sus respectivos estados
  //eliminé los let innecesarios
  //creé un componente NasaCard para simplificar el manejo de las tarjetas
  return (
    <div>
      <main>
        <h1>EARTH EXPLORER</h1>
        <div className="main-search_section">
          <input id="latitude" type="text" placeholder="set latitude" />
          <input id="longitude" type="text" placeholder="set longitude" />
          <button type="" onClick={() => setCoordenates()}>
            GO!
          </button>
        </div>
      </main>
      <div className="search-result">
        <h2>Your Place</h2>
        <div className="search-result_grid">
          <NasaCard lat={Lat} long={Long} year={2014} />
          <NasaCard lat={Lat} long={Long} year={2015} />
          <NasaCard lat={Lat} long={Long} year={2016} />
          <NasaCard lat={Lat} long={Long} year={2017} />
          <NasaCard lat={Lat} long={Long} year={2021} />
          <NasaCard lat={Lat} long={Long} year={2018} />
          <NasaCard lat={Lat} long={Long} year={2019} />
          <NasaCard lat={Lat} long={Long} year={2020} />
          <NasaCard lat={Lat} long={Long} year={2013} />
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Main;

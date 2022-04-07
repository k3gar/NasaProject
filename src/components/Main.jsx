import React from 'react'

const Main = () => {

  const [Datos, setDatos] = React.useState([])
  
  
  let API_KEY = 'nrvbaThb5ro5VIqRud7Axn0PCirbDXTVorCuWe9Y';
  
  async function getData(){
    let lat2 = document.querySelector('input').value;
    const re = /, /
    let value = lat2.split(re)
    let lat = value[0];
    let long = value[1];
    let data = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2021-02-01&api_key=${API_KEY}`);
    let dataFormated = await data.json()
    console.log(dataFormated)
    setDatos(dataFormated)
  }

  return (
    <React.Fragment>
      <main>
        <h1>EARTH EXPLORER</h1>
        <div className='main-search_section'>
            <input id='consult' type="text" placeholder='Where do you want to go?' />
            <button type="" onClick={() => getData()}>GO!</button>
        </div>
      </main>
      <div>
        <h2>Your Place</h2>
        <div>
          <p>{Datos.url}</p>
          <img src={Datos.url} alt="Imagen de Mapa" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Main
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Main = () => {

  const [Datos, setDatos] = React.useState([])
  const [Datos2, setDatos2] = React.useState([])
  const [Datos3, setDatos3] = React.useState([])
  const [Datos4, setDatos4] = React.useState([])
  const [Datos5, setDatos5] = React.useState([])
  const [Datos6, setDatos6] = React.useState([])
  const [Datos7, setDatos7] = React.useState([])
  const [Datos8, setDatos8] = React.useState([])
  const [Datos9, setDatos9] = React.useState([])

  let API_KEY = 'nrvbaThb5ro5VIqRud7Axn0PCirbDXTVorCuWe9Y';
  let errorImage = 'https://www.mdzol.com/u/fotografias/m/2020/8/6/f850x638-944869_1022358_5050.png'

  async function getData() {
    let lat2 = document.querySelector('input').value;
    const re = /, /
    let value = lat2.split(re)
    let lat = value[0];
    let long = value[1];

    if (lat2.length > 0) {
      let data2 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2014-02-01&api_key=${API_KEY}`);
      let dataFormated2 = await data2.json();

      let data3 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2015-02-01&api_key=${API_KEY}`);
      let dataFormated3 = await data3.json();

      let data4 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2016-02-01&api_key=${API_KEY}`);
      let dataFormated4 = await data4.json();

      let data5 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2017-02-01&api_key=${API_KEY}`);
      let dataFormated5 = await data5.json();

      let data = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2021-02-01&api_key=${API_KEY}`);
      let dataFormated = await data.json();

      let data6 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2018-02-01&api_key=${API_KEY}`);
      let dataFormated6 = await data6.json();

      let data7 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2019-02-01&api_key=${API_KEY}`);
      let dataFormated7 = await data7.json();

      let data8 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2020-02-01&api_key=${API_KEY}`);
      let dataFormated8 = await data8.json();

      let data9 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2013-02-01&api_key=${API_KEY}`);
      let dataFormated9 = await data9.json();
      setDatos(dataFormated)
      setDatos2(dataFormated2)
      setDatos3(dataFormated3)
      setDatos4(dataFormated4)
      setDatos5(dataFormated5)
      setDatos6(dataFormated6)
      setDatos7(dataFormated7)
      setDatos8(dataFormated8)
      setDatos9(dataFormated9)
    } else {
      let dataFormated = '';
      let dataFormated2 = '';
      let dataFormated3 = '';
      let dataFormated4 = '';
      let dataFormated5 = '';
      let dataFormated6 = '';
      let dataFormated7 = '';
      let dataFormated8 = '';
      let dataFormated9 = '';
      setDatos(dataFormated)
      setDatos2(dataFormated2)
      setDatos3(dataFormated3)
      setDatos4(dataFormated4)
      setDatos5(dataFormated5)
      setDatos6(dataFormated6)
      setDatos7(dataFormated7)
      setDatos8(dataFormated8)
      setDatos9(dataFormated9)
    }
  }

  function formatDate(string) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  }

  return (
    <React.Fragment>
      <main>
        <h1>EARTH EXPLORER</h1>
        <h4>Where do you want to go?</h4>
        <div className='main-search_section'>
          <input id='consult' type="text" placeholder='e.g. 13.6915381,  -89.2409653' />
          <button type="" className="btn-go" onClick={() => getData()}>GO!</button>
        </div>
      </main>
      <div className='search-result'>
        <h2>Results about your location</h2>
        {Datos.length === 0 && Datos2.length === 0 && Datos3.length === 0 && Datos4.length === 0 && Datos5.length === 0 && Datos6.length === 0 && Datos7.length === 0 && Datos8.length === 0 && Datos9.length === 0 ? (
          <div className='search-result_grid'>
            <h4>Not Found</h4>
          </div>
        ) : (
          <div className='search-result_grid'>
            <div className='search-result_data'>
              <p>{(Datos2.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos2.date)}</p>
              {
                (Datos2.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos2.url} alt="Imagen de Mapa" />
              }
            </div>
            <div className='search-result_data'>
              <p>{(Datos3.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos3.date)}</p>
              {
                (Datos3.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos3.url} alt="Imagen de Mapa" />
              }
            </div>
            <div className='search-result_data'>
              <p>{(Datos4.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos4.date)}</p>
              {
                (Datos4.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos4.url} alt="Imagen de Mapa" />
              }
            </div>
            <div className='search-result_data'>
              <p>{(Datos5.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos5.date)}</p>
              {
                (Datos5.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos5.url} alt="Imagen de Mapa" />
              }
            </div>
            <div id='myAnswer' className='search-result_data'>
              <h4>Actual View</h4>
              <p>{(Datos.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos.date)}</p>
              {
                (Datos.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos.url} alt="Imagen de Mapa" />
              }
            </div>
            <div className='search-result_data'>
              <p>{(Datos6.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos6.date)}</p>
              {
                (Datos6.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos6.url} alt="Imagen de Mapa" />
              }
            </div>
            <div className='search-result_data'>
              <p>{(Datos7.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos7.date)}</p>
              {
                (Datos7.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos7.url} alt="Imagen de Mapa" />
              }
            </div>
            <div className='search-result_data'>
              <p>{(Datos8.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos8.date)}</p>
              {
                (Datos8.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos8.url} alt="Imagen de Mapa" />
              }
            </div>
            <div className='search-result_data'>
              <p>{(Datos9.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos9.date)}</p>
              {
                (Datos9.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos9.url} alt="Imagen de Mapa" />
              }
            </div>
          </div>
        )}
      </div>
      {Datos.length !== 0 && Datos2.length !== 0 && Datos3.length !== 0 && Datos4.length !== 0 && Datos5.length !== 0 && Datos6.length !== 0 && Datos7.length !== 0 && Datos8.length !== 0 && Datos9.length !== 0 && (
        <Carousel>
          <div>
            {(Datos.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos.url} alt="Imagen de Mapa" />}
            <p className="legend">{(Datos.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos.date)}</p>
          </div>
          <div>
            {(Datos2.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos2.url} alt="Imagen de Mapa" />}
            <p className="legend">{(Datos2.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos2.date)}</p>
          </div>
          <div>
            {(Datos3.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos3.url} alt="Imagen de Mapa" />}
            <p className="legend">{(Datos3.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos3.date)}</p>
          </div>
          <div>
            {(Datos4.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos4.url} alt="Imagen de Mapa" />}
            <p className="legend">{(Datos4.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos4.date)}</p>
          </div>
          <div>
            {(Datos5.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos5.url} alt="Imagen de Mapa" />}
            <p className="legend">{(Datos5.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos5.date)}</p>
          </div>
          <div>
            {(Datos6.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos6.url} alt="Imagen de Mapa" />}
            <p className="legend">{(Datos6.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos6.date)}</p>
          </div>
          <div>
            {(Datos7.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos7.url} alt="Imagen de Mapa" />}
            <p className="legend">{(Datos7.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos7.date)}</p>
          </div>
          <div>
            {(Datos8.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos8.url} alt="Imagen de Mapa" />}
            <p className="legend">{(Datos8.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos8.date)}</p>
          </div>
          <div>
            {(Datos9.msg === "No imagery for specified date.") ? <img src={errorImage} alt="Imagen de Mapa" /> : <img src={Datos9.url} alt="Imagen de Mapa" />}
            <p className="legend">{(Datos9.msg === "No imagery for specified date.") ? 'Date not found' : formatDate(Datos9.date)}</p>
          </div>
        </Carousel>
      )}
    </React.Fragment>
  )
}

export default Main
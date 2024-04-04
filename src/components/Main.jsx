/* se importo las siguientes librerias */
import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Swal from 'sweetalert2';

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
  const [loading, setLoading] = React.useState(false);
  const [show, setshow] = React.useState(false);

    
  let API_KEY = 'nrvbaThb5ro5VIqRud7Axn0PCirbDXTVorCuWe9Y';
  //let errorImage = 'https://www.mdzol.com/u/fotografias/m/2020/8/6/f850x638-944869_1022358_5050.png'
  let errorImage = '/assets/error.jpg';
  
  async function getData(){
      
      let lat2 = document.querySelector('input').value;
      // validar que el campo no este vacio
      if(lat2!=""){
        
          const re = /, /
          let value = lat2.split(re)

          let lat = value[0];
          let long = value[1];
          // se evalua que ingrese numeros
          if (!isNaN(lat)) {
               setshow(true);
               setLoading(false);
          
                let data2 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2014-02-01&api_key=${API_KEY}`);
                let dataFormated2 = await data2.json();

                let data3 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2015-02-01&api_key=${API_KEY}`);
                let dataFormated3 = await data3.json();

                let data4 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2016-02-01&api_key=${API_KEY}`);
                let dataFormated4 = await data4.json();

                let data5 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2017-02-01&api_key=${API_KEY}`);
                let dataFormated5 = await data5.json();

                let data6 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2018-02-01&api_key=${API_KEY}`);
                let dataFormated6 = await data6.json();

                let data7 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2019-02-01&api_key=${API_KEY}`);
                let dataFormated7 = await data7.json();

                let data8 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2020-02-01&api_key=${API_KEY}`);
                let dataFormated8 = await data8.json();

                let data9 = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2013-02-01&api_key=${API_KEY}`);
                let dataFormated9 = await data9.json();

                let data = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2021-02-01&api_key=${API_KEY}`)
                .then(response => {
                  if(response.ok) {
                    setLoading(false);
                    return response.json();
                  }
                   
                }).then(data => {
                  setDatos(data);
                  setLoading(true);
                  setshow(false);
                  document.querySelector('input').value='';
                });
       
                //setDatos(dataFormated)
                setDatos2(dataFormated2)
                setDatos3(dataFormated3)
                setDatos4(dataFormated4)
                setDatos5(dataFormated5)
                setDatos6(dataFormated6)
                setDatos7(dataFormated7)
                setDatos8(dataFormated8)
                setDatos9(dataFormated9)
          }else{
            //mensaje de error 
               Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Al parecer los valores no son validos",
                });
                }
      }else{
        //mensaje de error
          Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Al parecer no has ingresado las coordenadas",
          });
      }
  }

  // configuraion de carrucel
  const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
  }

  return (
    <React.Fragment>
      
      <main>
        <h1>EARTH EXPLORER</h1>
        <div className='main-search_section'>
            <input id='consult' type="text" placeholder='Where do you want to go?' />
            <button className='btn buscar ' type="button" onClick={() => getData()}>GO!</button>
        </div>
      </main>
      { (show)? <div className='container'><div className='row'><img className='col-3 mx-auto' src="https://saia.uvp.mx/assets/images/loading_10.gif"></img>  </div></div> : <p></p> }
      { (loading) ? 
      <div className='container search-result'>
            <div className='row'>
                <h2>Your Place</h2>
                <OwlCarousel 
                  className="owl-carousel owl-theme" {...options}
                 >
                            <div className="card col-md-8 col-lg-10 mx-auto" >
                                            {

                                            (Datos2.msg === "No imagery for specified date.") ?
                                            <img src={errorImage} className="img-fluid"alt="Imagen de Mapa" /> : 
                                            <img src={Datos2.url} className="img-fluid"alt="Imagen de Mapa" /> 
                                            }
                                            <div className="card-body">
                                                <h4><br></br> </h4>
                                                <h5 className="card-title">{(Datos2.msg === "No imagery for specified date.") ?
                                                'hay un error' :Datos2.date
                                                }</h5>
                                            </div>
                            </div>
                            <div className="card col-md-8 col-lg-10 mx-auto" >
                                            {

                                            (Datos3.msg === "No imagery for specified date.") ?
                                            <img src={errorImage} className="img-fluid"alt="Imagen de Mapa" /> : 
                                            <img src={Datos3.url} className="img-fluid"alt="Imagen de Mapa" /> 
                                            }
                                            <div className="card-body">
                                                <h4><br></br> </h4>
                                                <h5 className="card-title">{(Datos3.msg === "No imagery for specified date.") ?
                                                'hay un error' :Datos3.date
                                                }</h5>
                                            </div>
                            </div>
                            <div className="card col-md-8 col-lg-10 mx-auto" >
                                            {

                                            (Datos4.msg === "No imagery for specified date.") ?
                                            <img src={errorImage} className="img-fluid"alt="Imagen de Mapa" /> : 
                                            <img src={Datos4.url} className="img-fluid"alt="Imagen de Mapa" /> 
                                            }
                                            <div className="card-body">
                                                <h4><br></br> </h4>
                                                <h5 className="card-title">{(Datos4.msg === "No imagery for specified date.") ?
                                                'hay un error' :Datos4.date
                                                }</h5>
                                            </div>
                            </div>
                            <div className="card col-md-8 col-lg-10 mx-auto" >
                                            {

                                            (Datos5.msg === "No imagery for specified date.") ?
                                            <img src={errorImage} className="img-fluid"alt="Imagen de Mapa" /> : 
                                            <img src={Datos5.url} className="img-fluid"alt="Imagen de Mapa" /> 
                                            }
                                            <div className="card-body">
                                                <h4><br></br> </h4>
                                                <h5 className="card-title">{(Datos5.msg === "No imagery for specified date.") ?
                                                'hay un error' :Datos5.date
                                                }</h5>
                                            </div>
                            </div>
                            <div className="card col-md-8 col-lg-10 mx-auto" >
                                            {

                                            (Datos6.msg === "No imagery for specified date.") ?
                                            <img src={errorImage} className="img-fluid"alt="Imagen de Mapa" /> : 
                                            <img src={Datos6.url} className="img-fluid"alt="Imagen de Mapa" /> 
                                            }
                                            <div className="card-body">
                                                <h4><br></br> </h4>
                                                <h5 className="card-title">{(Datos6.msg === "No imagery for specified date.") ?
                                                'hay un error' :Datos6.date
                                                }</h5>
                                            </div>
                            </div>
                            <div className="card col-md-8 col-lg-10 mx-auto" >
                                            {

                                            (Datos7.msg === "No imagery for specified date.") ?
                                            <img src={errorImage} className="img-fluid"alt="Imagen de Mapa" /> : 
                                            <img src={Datos7.url} className="img-fluid"alt="Imagen de Mapa" /> 
                                            }
                                            <div className="card-body">
                                                <h4><br></br> </h4>
                                               <h5 className="card-title">{(Datos7.msg === "No imagery for specified date.") ?
                                                'hay un error' :Datos7.date
                                                }</h5>
                                            </div>
                            </div>
                            <div className="card col-md-8 col-lg-10 mx-auto" >
                                            {

                                            (Datos8.msg === "No imagery for specified date.") ?
                                            <img src={errorImage} className="img-fluid"alt="Imagen de Mapa" /> : 
                                            <img src={Datos8.url} className="img-fluid"alt="Imagen de Mapa" /> 
                                            }
                                            <div className="card-body">
                                                <h4><br></br> </h4>
                                                <h5 className="card-title">{(Datos8.msg === "No imagery for specified date.") ?
                                                'hay un error' :Datos8.date
                                                }</h5>
                                            </div>
                            </div>
                            <div className="card col-md-8 col-lg-10 mx-auto" >
                                            {

                                            (Datos9.msg === "No imagery for specified date.") ?
                                            <img src={errorImage} className="img-fluid" alt="Imagen de Mapa" /> : 
                                            <img src={Datos9.url} className="img-fluid" alt="Imagen de Mapa" /> 
                                            }
                                            <div className="card-body">
                                                <h4></h4>
                                                <h5 className="card-title">{(Datos9.msg === "No imagery for specified date.") ?
                                                'hay un error' :Datos9.date
                                                }</h5>
                                            </div>
                            </div>
                            <div id='myAnswer' className="card col-md-8 col-lg-10 mx-auto" >
                                            {
                                            (Datos.msg === "No imagery for specified date.") ?
                                            <img src={errorImage} className="img-fluid"alt="Imagen de Mapa" /> : 
                                            <img src={Datos.url} className="img-fluid"alt="Imagen de Mapa" /> 
                                            }
                                            <div className="card-body">
                                                <h4>Actual View </h4>
                                                <h5 className="card-title">{(Datos.msg === "No imagery for specified date.") ?
                                                'hay un error' :Datos.date
                                                }</h5>
                                            </div>
                            </div>
                </OwlCarousel>
            </div>
      </div>
      :<p></p>}
      
     
    </React.Fragment>
  )

}

export default Main
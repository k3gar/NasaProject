import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY

export default function SimpleSlider() {
  const api_key = "nrvbaThb5ro5VIqRud7Axn0PCirbDXTVorCuWe9Y";
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      let response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${api_key}`
      );
      const result = await response.json();
      setImages(result.photos);
    };

    getPhotos();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {images
        ? images.map((item) => {
            return (
              <div key={item.id} className="slide_container">
                <img
                  width={500}
                  height={500}
                  className="carrusel-image"
                  src={item.img_src}
                  alt="Imagen de Mapa"
                />
                <p className="slide_text">{item.camera.full_name}</p>
              </div>
            );
          })
        : null}
    </Carousel>
  );
}

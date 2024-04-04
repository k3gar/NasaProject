import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { NasaCard } from './NasaCard';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Carousel = () => {
  const handleDragStart = (e) => e.preventDefault();

  //todas esta imagenes están "quemadas" con el fin de poner un nombre fijo en la prop opcional de name, por ejemplo el Taj Mahal dentro del carrusel
  const items = [
    <NasaCard
      lat={27.9881}
      long={86.925}
      year={2014}
      name={'Mount Everest'}
      onDragStart={handleDragStart}
    />,
    <NasaCard
      lat={27.1751}
      long={78.0421}
      year={2014}
      name={'Taj Mahal'}
      onDragStart={handleDragStart}
    />,
    <NasaCard
      lat={19.6926}
      long={98.8437}
      year={2014}
      name={'Piramid of Teotihuacán'}
    />,
    <NasaCard
      lat={35.6586}
      long={139.7454}
      year={2014}
      name={'Tokio Tower'}
      onDragStart={handleDragStart}
    />,
    <NasaCard
      lat={40.4319}
      long={116.5704}
      year={2014}
      name={'Chinese Wall'}
      onDragStart={handleDragStart}
    />,
    <NasaCard
      lat={44.4279}
      long={110.5885}
      year={2020}
      name={'Yellowstone'}
      onDragStart={handleDragStart}
    />,
    <NasaCard
      lat={36.1069}
      long={112.1129}
      year={2014}
      name={'Grand Canyon'}
      onDragStart={handleDragStart}
    />,
  ];

  //configuración responsive del carrusel solicitado
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1440: { items: 4 },
  };
  return (
    //aqui uso el componente del carrusel con su configuración e imágenes
    <div className="carrusel">
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </div>
  );
};

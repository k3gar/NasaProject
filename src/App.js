import { useState, useEffect } from "react";
import { getCarouselImgs } from "./api/services";
import { Carousel } from "./components/carousel/Carousel";
import { useAnimation } from "./hooks/useAnimation";
import rocket from "./rocket.json";
import Lottie from "lottie-react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header";
import Main from "./components/Main";

import "./styles/main.css";

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { isLoading } = useAnimation();
  const [carouselImg, setcarouselImg] = useState([]);

  useEffect(() => {
    getCarouselImgs().then((resp) => {
      setcarouselImg(resp.results.map((x) => x[10]));
    });
  }, []);

  if (isLoading) {
    return <Lottie animationData={rocket} />;
  }

  return (
    <div className="App">
      <Header />
      <Main />

      {/* <Slider {...settings}>
        {carouselImg.map((x) => (
          <Carousel key={x} payload={x} />
        ))}
      </Slider> */}
    </div>
  );
}

export default App;

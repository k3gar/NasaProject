import React, { useState } from "react";

import SliderSlick from "react-slick";
import clsx from "clsx";
import { format } from "date-fns";

const errorImage =
  "https://www.mdzol.com/u/fotografias/m/2020/8/6/f850x638-944869_1022358_5050.png";

export const Slider = ({ panels }) => {
  const [loaded, setLoaded] = useState({});

  const handleImageLoaded = (index) => {
    setLoaded((prevLoaded) => ({ ...prevLoaded, [index]: true }));
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(panels);
  return (
    <div className="w-[80%] max-w-[80vw]">
      <div className="slider-container">
        <SliderSlick {...settings}>
          {panels
            .filter((item) => item.date)
            .map((panel, index) => (
              <div key={index} className="p-2 h-full">
                <div className="bg-white flex flex-col justify-center items-center p-3 rounded-xl h-full relative">
                  <div
                    className={clsx("w-full h-40  rounded-xl", {
                      "animate-pulse bg-slate-700": !loaded[index],
                    })}
                  >
                    <img
                      src={panel?.url ?? errorImage}
                      alt={panel.title}
                      className="w-full h-40 object-cover rounded-xl"
                      onLoad={() => handleImageLoaded(index)}
                      style={!loaded[index] ? { display: "none" } : {}}
                    />
                  </div>
                  {panel?.date && (
                    <div className="flex flex-col justify-center gap-2 items-start py-2">
                      <h3>
                        <span className="font-bold">Date: </span>
                        {format(new Date(panel?.date), "EEEE eo, MMMM yyyy")}
                      </h3>
                      <h3>
                        <span className="font-bold">Hour:</span>{" "}
                        {format(new Date(panel?.date), "h:mm a")}(
                        {format(new Date(panel?.date), "z")})
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </SliderSlick>
      </div>
    </div>
  );
};

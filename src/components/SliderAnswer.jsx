import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";

const SliderAnswer = ({ loading, data, years }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = data.map((imageData) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageData.url;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    Promise.allSettled(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true));
  }, [data]);

  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 text-center">
        {loading || !imagesLoaded ? (
          <div className="flex items-center justify-center w-full h-full">
            <img src="/assets/nasagif.gif" alt="NASA Logo" />
          </div>
        ) : (
          <>
            <Carousel>
              {data.map((imageData, index) =>
                imageData.data?.url ? (
                  <div
                    key={index}
                    className="h-full items-center justify-center text-white"
                  >
                    <h2>Photo of {years[index]}-02-01 </h2>
                    <img src={imageData.data?.url} alt={`This is an image ${index + 1}`} />
                  </div>
                ) : (
                  <div
                    key={index}
                    className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
                  >
                    This year {years[index]}-02-01 lacks a visual representation
                    and is symbolized by this
                  </div>
                )
              )}
            </Carousel>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default SliderAnswer;

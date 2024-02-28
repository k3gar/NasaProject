import React, { useState } from "react";
import Place from "./Place";
import ThreeDotsWave from "./Loading";
import Slider from "./Slider";

const Main = () => {
  const [position, setPosition] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  let API_KEY = "nrvbaThb5ro5VIqRud7Axn0PCirbDXTVorCuWe9Y";

  async function getData() {
    if (!position) {
      setErrors("Please enter a location");
      return;
    }
    setErrors("");
    setLoading(true);
    setData([]);
    const dateArray = [
      "2014-02-01",
      "2015-02-01",
      "2016-02-01",
      "2017-02-01",
      "2018-02-01",
      "2019-02-01",
      "2020-02-01",
      "2021-02-01",
      "2022-02-01",
    ];

    const numbers = position.match(/-?\d+(\.\d+)?/g);
    if (!numbers) {
      setErrors("Enter a valid location");
      setLoading(false);
      return;
    }
    const numbersArray = numbers.map(Number);
    const [lat, long] = numbersArray;

    const dataArray = await dateArray.map(async (date) => {
      let data = await fetch(
        `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=${date}&api_key=${API_KEY}`
      );
      return await data.json();
    });

    Promise.all(dataArray).then((values) => {
      setData(values);
      setLoading(false);
    });
  }

  function handleInputChange(e) {
    setPosition(e.target.value);
  }

  return (
    <main>
      <h1>EARTH EXPLORER</h1>
      <div className="main-search_section">
        <div>
          <input
            id="consult"
            type="text"
            value={position}
            onChange={handleInputChange}
            placeholder="Where do you want to go?"
          />
          {errors ? <p className="errors">{errors}</p> : null}
        </div>
        <button disabled={loading} type="button" onClick={() => getData()}>
          {loading ? "Loading" : "GO!"}
        </button>
      </div>

      <div className="search-result">
        {loading ? <ThreeDotsWave /> : null}
        {data.length > 0 ? (
          <>
            <h2>Your place from 2014 to 2021</h2>
            <div className="search-result_grid">
              {data.map((item) => {
                return <Place key={item.date} data={item} />;
              })}
            </div>
          </>
        ) : null}
      </div>
      <div className="slider_container">
        <h2>Pictures from Mars</h2>
        <Slider />
      </div>
    </main>
  );
};

export default Main;

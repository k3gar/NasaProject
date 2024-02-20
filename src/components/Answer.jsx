import React, { useState } from "react";
import { callApi } from "../services/NasaApi";
import Loader from "./Loader";
import SliderAnswer from "./SliderAnswer";
import Swal from "sweetalert2";
import { ValidateCoordinates } from "../utils/validateCoordinates";

const Answer = () => {
  const [currentYear, setCurrentYear] = useState("");

  const [loading, setLoading] = useState(false);

  const years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

  const [completedYears, setCompletedYears] = useState({});

  const [data, setData] = useState([]);

  const [loader, setLoader] = useState(false);

  const [inputNasa, setInputNasa] = useState("");

  async function getData() {
    try {
      if (inputNasa !== "" && ValidateCoordinates(inputNasa)) {
        setLoading(true);
        setLoader(true);
        setCompletedYears([]);
        const dataFormatedArray = [];

        for (const year of years) {
          const dataFormated = await callApi({ coordinates: inputNasa, year });
          setCurrentYear({ year, hasData: dataFormated.hasData });
          setCompletedYears((prevCompletedYears) => [
            ...prevCompletedYears,
            { year, hasData: dataFormated.hasData },
          ]);
          dataFormatedArray.push(dataFormated);
        }
        setData(dataFormatedArray);
        // console.log(dataFormatedArray);
        setLoader(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must enter a location",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred",
      });
    }
  }

  const clearFunction = () => {
    setInputNasa("");
    setCompletedYears([]);
    setLoading(false);
  };

  return (
    <>
      <main>
        <h1>EARTH EXPLORER</h1>
        <div className="main-search_section">
          <input
            value={inputNasa}
            onChange={(e) => setInputNasa(e.target.value)}
            type="text"
            placeholder="Where do you want to go?"
          />
          <button type="" onClick={() => getData()}>
            GO!
          </button>
          <button className="bg-red-400 ml-2 " onClick={() => clearFunction()}>
            Clear
          </button>
        </div>
        <div className="columns-xl">
          {loading ? (
            <Loader
              currentYear={currentYear}
              years={years}
              completedYears={completedYears}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="columns-xl">
          {loading ? (
            <SliderAnswer data={data} loading={loader} years={years} />
          ) : (
            <></>
          )}
        </div>
      </main>
    </>
  );
};

export default Answer;

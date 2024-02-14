import React, { useEffect, useRef, useState } from "react";
import {
  getAsset,
  getDates,
  getLocalitation,
  validateLocationFormat,
} from "@/utils";

import ClipLoader from "react-spinners/ClipLoader";
import { Slider } from "./Slider";
import { toast } from "react-toastify";

const Main = () => {
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGettingMyLocation, setIsGettingMyLocation] = useState(false);

  useEffect(() => {
    setDates(getDates());
  }, []);

  // Input state and ref
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  // Get data handler
  async function getData() {
    if (isLoading) return;
    setIsLoading(true);

    // Validate input value
    let position = inputValue.replace(" ", "").split(",");
    let lat = position[0];
    let long = position[1];

    if (lat && long && lat.length > 0 && long.length > 0) {
      const res = await Promise.all(
        dates.map(async (date) => await getAsset(lat, long, date))
      ).then((res) => res);

      setData(res);
    } else {
      toast.error("Invalid location format. Please enter a valid location.");
    }

    setIsLoading(false);
  }

  // Input location handler
  const onChangeInputValue = (value) => {
    if (value.length > 0) {
      validateLocationFormat(value) && setInputValue(value ?? "");
    } else {
      setInputValue(value);
    }
  };

  // Get my location handler
  const handleGetLocation = async () => {
    if (isGettingMyLocation) return;

    setIsGettingMyLocation(true);
    try {
      const location = await getLocalitation();
      setInputValue(`${location.latitude},${location.longitude}`);
    } catch (error) {
      toast.error(error);
    }
    setIsGettingMyLocation(false);
  };

  return (
    <React.Fragment>
      <main className="flex flex-col gap-10 items-center py-20">
        <h1>EARTH EXPLORER</h1>
        <div className="main-search_section ">
          <div className="flex flex-col gap-5">
            <input
              id="consult"
              type="text"
              placeholder="Where do you want to go? (lat, long) ex: 40.73061, -73.935242"
              ref={inputRef}
              onChange={(e) =>
                onChangeInputValue(e.target.value.replaceAll(" ", ""))
              }
              value={inputValue}
            />
            <div className="flex justify-center gap-10">
              <button
                type=""
                onClick={handleGetLocation}
                className=" text-blue-900 bg-opacity-80 bg-white hover:bg-opacity-100"
              >
                {isGettingMyLocation ? (
                  <ClipLoader size={15} color="blue" />
                ) : (
                  "Get my Location"
                )}
              </button>
              <button type="" onClick={getData} className="hover:bg-blue-950">
                {isLoading ? <ClipLoader size={15} color="white" /> : "Search"}
              </button>
            </div>
          </div>
        </div>
        <div className="search-result relative p-10">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center">
              <h2>Feching Data:</h2>
              <div>
                <ClipLoader size={50} color="white" />
              </div>
            </div>
          ) : data.length === 0 ? (
            <h2>No data to show</h2>
          ) : (
            <>
              <h2>Your Place</h2>
              <div className="flex flex-wrap justify-center gap-10">
                {data && <Slider panels={data} />}
              </div>
            </>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Main;

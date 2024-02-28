import React from "react";

const Place = ({ data: { date, msg, url } }) => {
  return (
    <div className="search-result_data">
      {msg === "No imagery for specified date." ? (
        <img
          src="https://www.mdzol.com/u/fotografias/m/2020/8/6/f850x638-944869_1022358_5050.png"
          alt="Imagen de Mapa"
        />
      ) : (
        <img src={url} alt="Imagen de Mapa" />
      )}
      <p>{date}</p>
    </div>
  );
};

export default Place;

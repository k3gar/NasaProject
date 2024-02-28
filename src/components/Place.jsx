import React from "react";

const Place = ({ data: { date, msg, url } }) => {
  const formattedDate = new Date(date).toLocaleDateString();
  const formattedTime = new Date(date).toLocaleTimeString();
  return (
    <div className="search-result_data">
      {msg === "No imagery for specified date." ? null : (
        <>
          <img src={url} alt="Imagen de Mapa" />
          <p>{`Date: ${formattedDate} Time:${formattedTime}`}</p>
        </>
      )}
    </div>
  );
};

export default Place;

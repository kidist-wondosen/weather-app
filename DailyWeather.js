// import React, { useState, useEffect } from "react";
// import axios from "axios";
const DailyWeather = ({ data, key }) => {
  const { date, name, icon, celcius, description } = data;
  function getDayOfWeek(dateString) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    return daysOfWeek[date.getDay()];
  }
  return (
    <div key={key} className="weatherbox">
      <p>
        <strong>{getDayOfWeek(date)}</strong>
      </p>
      <div className="winfo">
        <img style={{ width: "100px" }} src={icon} alt="" />
        <div className="details">
          {" "}
          <h2>{name}</h2>
          <p>Tempreature: {Math.round(celcius)}°C</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DailyWeather;

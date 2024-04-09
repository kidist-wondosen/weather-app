import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather.js";

function Home() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=6a0d5ca652da8f47870976f5dd8522d3&&units=metric`;
      const response = await axios.get(apiUrl);
      const weatherData = response.data.list;
      const forecast = weatherData
        .map((element) => {
          return {
            name: name,
            date: element.dt_txt,
            celcius: element.main.temp,
            icon: `https://openweathermap.org/img/wn/${element.weather[0].icon}.png`,
            descripton: element.weather[0].main.toLowerCase(),
          };
        })
        .filter((val, index) => index % 9 == 0);
      setData(() => forecast);
    } catch (error) {
      if (error.response.status === 404) {
        setError("Invalid City");
      } else {
        setError("");
      }
      setData({
        celcius: 0,
        name: "No data",
        humidity: 0,
        speed: 0,
      });
    }
  };

  return (
    <div className="weather">
      <div className="search">
        <input
          type="text"
          placeholder="Enter City Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => fetchData()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
      </div>
      <div>{data.length ? <Weather data={data} /> : <></>}</div>
    </div>
  );
}

export default Home;

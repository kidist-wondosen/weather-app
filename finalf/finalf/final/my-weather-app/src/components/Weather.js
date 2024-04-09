import DailyWeather from "./DailyWeather";

const Weather = ({ data }) => {
  const { icon, name, description, celcius } = data[0];
  data.shift();
  const dailyWeather = data.map((weather, index) => (
    <DailyWeather key={index} data={weather} />
  ));

  return (
    <>
      <div className="winfo">
        <img style={{ width: "100px" }} src={icon} alt="" />
        <div className="details">
          {" "}
          <h5>Today</h5>
          <h2>{name}</h2>
          <p>Tempreature: {Math.round(celcius)}°C</p>
          <p>{description}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          position: "relative",
          top: "100px",
        }}
      >
        {dailyWeather}
      </div>
    </>
  );
};

export default Weather;

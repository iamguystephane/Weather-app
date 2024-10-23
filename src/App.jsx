import React, { useState } from "react";
import "./app.css";
import Information from "./components/api-information";
import Search from "./components/search";

const App = () => {
  const [city, getCity] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  return (
    <>
      <div className="container">
        <h2> Simple weather app </h2>
        <h6 style={{ textAlign: "center" }}> Based on OpenWeatherAPI </h6>
        <br />
        <Search
          setCity={getCity}
          city={city}
          setWeatherData={setWeatherData}
        />
        <br />
        <Information weatherData={weatherData} />
      </div>
    </>
  );
};

export default App;

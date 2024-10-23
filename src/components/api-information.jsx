import "../styles/api-information.css";

const Information = ({ weatherData }) => {
  if (!weatherData || !weatherData.sys || !weatherData.main || !weatherData.wind) {
    return <p>No weather data available. Please search for a city.</p>;
  }
  return (
    <>
      <div className="info-container">
        <div className="weather-info temperature">
          <p> {weatherData.sys.country}, {weatherData.name}</p>
          <h1>{(weatherData.main.temp - 273.15).toFixed(2)} °C</h1> {/* Convert Kelvin to Celsius */}
        </div>
        <div className="weather-info others">
          <div className="headings">
            <p> WIND </p>
            <p> PRESSURE </p>
            <p> HUMIDITY </p>
          </div>
          <div className="informations">
            <p> {weatherData.wind.speed} m/s </p>
            <p> {weatherData.main.pressure} hPa </p>
            <p> {weatherData.main.humidity}% </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;

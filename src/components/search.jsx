import { useState } from "react";
import "../styles/search.css";
import axios from "axios";

const Search = ({ setCity, city, setWeatherData }) => {
  const handleOnChange = (e) => {
    const { value } = e.target;
    setCity(value);
  };
  let error;
  const [errorMsg, setErrorMsg] = useState(null);
  const API_KEY = "2264004973fb0b41a017e20120000d5b";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const getWeatherData = async () => {
    try {
      const response = await axios.get(URL); 
      const data = response.data;
      setWeatherData(data);
      console.log(data)
    } catch (error) {
      console.log(`There was a problem fetching data ${error}`);
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!city) {
      error = "Please enter your city!";
    } else {
      getWeatherData();
    }
    setErrorMsg(error);
  };
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter your City"
          onChange={handleOnChange}
        />
        <button type="submit" onClick={handleOnSubmit}>
          Check
        </button>
      </div>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
    </>
  );
};

export default Search;

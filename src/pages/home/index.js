import React, { useState } from "react";
import "./home.css";
import Weather from "../../components/assets/cloud.png";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {} from "../../misc/misc0.js"

const data = [
  { id: 1, name: "Nairobi" },
  { id: 2, name: "Mombasa" },
  { id: 3, name: "Nakuru" },
  { id: 4, name: "Kisumu" },
  { id: 5, name: "Nayuki" },
];
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(data);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="Home_container">
      <div className="searchContainer">
        <form className="searchItems" onSubmit={handleSubmit}>
          <Search className="searchIcon" />
          <input
            className="inputArea"
            type="text"
            placeholder="Search for city"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="countyContainer">
        <span className="countyName">Nairobi</span>
        <span className="this-date"></span>
        <span className="this-month"></span>
        <span className="this-year"></span>
      </div>
      <div className="WeatherContainer">
        <img src={Weather} className="WeatherImg" />
        <div className="Weatherdata">
          <div className="temparature">
            <h1>27</h1>
            <span>o</span>
          </div>
          <span>Partly Cloudy</span>
        </div>
      </div>
      <div className="forecastBtn">
        <Link onClick={() => setIsVisible(!isVisible)} className="LinefOneBtn">
          <span>Hourly Forecast</span>
        </Link>
        <Link to="/waetherList" className="LinefOneBtn">
          <span>Weekly Forecast</span>
        </Link>
      </div>
      {isVisible && (
        <div className="footer">
          <div>
            <div className="temparatureFooter">
              <h1>29</h1>
              <span>o</span>
              <span>C</span>
              <img src={Weather} className="WeatherImgFooter" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

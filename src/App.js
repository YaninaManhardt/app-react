import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/clima-app/icons/sunny.svg",
  "01n": "/clima-app/icons/night.svg",
  "02d": "/clima-app/icons/day.svg",
  "02n": "/clima-app/icons/cloudy-night.svg",
  "03d": "/clima-app/icons/cloudy.svg",
  "03n": "/clima-app/icons/cloudy.svg",
  "04d": "/clima-app/icons/perfect-day.svg",
  "04n": "/clima-app/icons/cloudy-night.svg",
  "09d": "/clima-app/icons/rain.svg",
  "09n": "/clima-app/icons/rain-night.svg",
  "10d": "/clima-app/icons/rain.svg",
  "10n": "/clima-app/icons/rain-night.svg",
  "11d": "/clima-app/icons/storm.svg",
  "11n": "/clima-app/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9501b40df30458e7e08eddbcedeebbfa`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>

    
  );
}

export default App;

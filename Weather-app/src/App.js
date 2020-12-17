import logo from './logo.svg';
import './App.css';
import { Form, Button } from 'react-bootstrap';
import SearchBar from './component/SearchBar';
import CurrentWeather from './component/CurrentWeather';
import ForecastWeather from './component/ForecastWeather';
import React, { useState, useEffect } from 'react';

function App() {
  const [city, setCity] = useState('Hà nội');

  function changeNameCity(name) {
    setCity(name);
  }

  return (
    <div className="app">
      <SearchBar func={changeNameCity}></SearchBar>
      <CurrentWeather key={Math.random()} city={city}></CurrentWeather>
      <ForecastWeather key={city} city={city}></ForecastWeather>
    </div>
  );
}

export default App;

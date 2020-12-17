import React, { useState, useEffect } from 'react';
import './ForecastWeather.css';
import { Spinner } from 'react-bootstrap';
const axios = require('axios');

function ForecastWeather(props) {
  const cityName = props.city;
  const [dataForecast, setDataForescast] = useState(null);

  useEffect(async () => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast';
    const appId = '82471f382216cbbdbb412df76b9b8cb8';

    const response = await axios.get(url, {
      params: {
        q: cityName,
        units: 'metric',
        appid: appId,
        lang: 'vi',
      },
    });
    const data = response.data.list;
    setDataForescast(data.slice(1, 7));
  }, []);

  if (dataForecast !== null) {
    const hmm = dataForecast.map((item, index) => {
      return (
        <div key={index}>
          <p>{new Date(item.dt * 1000).getHours() + 'h'}</p>
          <img
            className="forecast-img"
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
          ></img>
          <p className="temperature">{Math.round(item.main.temp)}</p>
        </div>
      );
    });

    return (
      <div className="main">
        <h6>Theo giờ</h6>
        <div className="list-box">{hmm}</div>
      </div>
    );
  }
  return (
    <Spinner
      animation="border"
      variant="primary"
      className="loading-forescast"
    />
  );
}

export default ForecastWeather;

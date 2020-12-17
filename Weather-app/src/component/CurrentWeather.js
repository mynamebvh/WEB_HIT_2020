import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import './CurrentWeather.css';

const axios = require('axios');
function CurrentWeather(props) {
  const [dataCity, setDataCity] = useState(null);
  // const [cityName, setCityName] = useState(props.city);
  const cityName = props.city;
  // useEffect(() => {
  //   setCityName(props.city);
  // }, [props]);

  const arrDay = [
    'Chủ nhật',
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy',
  ];
  useEffect(async () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const appId = '82471f382216cbbdbb412df76b9b8cb8';

    const response = await axios.get(url, {
      params: {
        q: cityName,
        units: 'metric',
        appid: appId,
        lang: 'vi',
      },
    });

    setDataCity(response.data);
  }, []);

  if (dataCity !== null)
    return (
      <div>
        <h3>{dataCity.name}</h3>
        <h1 className="temperature">{Math.round(dataCity.main.temp)}</h1>
        <img
          className="current-img"
          src={`http://openweathermap.org/img/wn/${dataCity.weather[0].icon}@2x.png`}
        ></img>

        <div className="description">
          <p>{arrDay[new Date(dataCity.dt * 1000).getDay()]}</p>
          <p>{dataCity.weather[0].description}</p>
        </div>
      </div>
    );
  return (
    <Spinner animation="border" variant="primary" className="loading-current" />
  );
}

export default CurrentWeather;

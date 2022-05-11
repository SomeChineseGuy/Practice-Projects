import axios from 'axios';
import { useState, useEffect } from 'react';
import { WeatherInfo } from './WeatherInfo';

export const Container = () => {
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [err, setErr] = useState(null);


  useEffect(() => {
    if(city) fetchData(city)
  }, [city]);


  const fetchData = (city = "vancouver") => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.REACT_APP_apiKey}`)
    .then(data => {
      setErr(null);
      setWeatherData(data.data);
    })
    .catch(err => {
      console.log(err);
      setWeatherData(null);
      setErr("City Not found, please try again.")
    })
  }
 


  const searchCity = (event) => {
    event.preventDefault();
    setCity(event.target.city.value);
  }

  return (
    <div className="form-container">
      <h1> Search for a city!</h1>
      <form onSubmit={(e) => searchCity(e)}>
        <label>City Name:</label>
        <input type="text" name='city'/>
        <button>Search</button>
      </form>

      <div>{weatherData && <WeatherInfo weather={weatherData}/>}</div>
      <div className='err' style={err ? {display: "block"} : {display: "none"}}><h2>{err && err}</h2></div>

    </div>
  );
}
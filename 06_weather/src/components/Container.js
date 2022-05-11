import axios from 'axios';
import { useState, useEffect } from 'react';
import { WeatherInfo } from './WeatherInfo';

export const Container = () => {
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [message, setMessage] = useState('Find your weather!');


  useEffect(() => {
    if(city) fetchData(city)
  }, [city]);


  const fetchData = (city = "vancouver") => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.REACT_APP_apiKey}`)
    .then(data => {
      setMessage(`You Searched for: ${data.data.name}`);
      setWeatherData(data.data);
    })
    .catch(err => {
      console.error(err);
      setWeatherData(null);
      setMessage(`Unable to find ${city}, please try again.`);
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
      <h1>{message}</h1>
      {weatherData && <WeatherInfo weather={weatherData}/>}

    </div>
  );
}
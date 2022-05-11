export const WeatherInfo = (props) => {
  console.log("props", props)
  const {name, weather, main, sys, wind} = props.weather;
  return (
    <div>
          <h3>Weather: <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} /> {weather[0].main} - {weather[0].description}</h3>
      <h4>Feels like: {main.feels_like}°C</h4>
      <h4>Between {main.temp_min}° - {main.temp_max}°C</h4>
      <h4>Wind speed: {wind.speed}meter/sec</h4>
      <h4>Wind degree: {wind.deg}°</h4>
      <h4>Wind gust: {wind.gust}meter/sec</h4>  
    </div>
  )

}
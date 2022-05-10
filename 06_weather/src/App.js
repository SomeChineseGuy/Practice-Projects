import axios from 'axios';
import { useState } from 'react';

function App() {

  const fetchData = (city = 'vancouver') => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.REACT_APP_apiKey}`)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  console.log(fetchData())



  return (
    <div className="App">
      <h1> Hello world</h1>
    </div>
  );
}

export default App;

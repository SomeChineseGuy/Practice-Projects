const express = require('express');
const morgan = require('morgan');
const env = require('dotenv').config({
  path: __dirname + '/.env'
})
const port = process.env.PORT;
const app = express();
const axios = require('axios');
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send("Ready");
})

const getSummerID = async (summonerName = "ThatGuyy") => {
  const summonerPuuid = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.riot_api_key}`)
    .then(data => {
      return data.data.puuid;
    });
    return summonerPuuid;
}

const getListOfMatches = async (puuid) => {
  const list = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${process.env.riot_api_key}`)
  .then(data => {
    return data.data;
  })
  return list;
}

const testAPI = async () => {
  let summonerID = await getSummerID();
  let matchList = await getListOfMatches(summonerID);
  console.log(matchList);
}

testAPI();

app.listen(port, ()=> {
  console.log(`app is listening on port ${port}`);
})
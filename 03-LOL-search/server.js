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

const getSummerPuuid = async (summonerName = "DoubleLift") => {
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

const getSingleMatch = async (matchID, puuid) => {
  console.log(puuid);
  let positionInArr = null;
  let matchInfo = {};
  const match = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${process.env.riot_api_key}`)
  .then(data => {
    let participantsArr = data.data.metadata.participants
    for(let i = 0; i < participantsArr.length; i++) {
      if(participantsArr[i] === puuid) {
        positionInArr = i;
      }
    }

    console.log(data)
    matchInfo["gameCreation"] = data.data.info.gameCreation;
    matchInfo["gameDuration"] = data.data.info.gameDuration;

    // console.log(data.data.info.participants[positionInArr]);
    
    console.log(matchInfo)

    return matchInfo
  })
}

const testAPI = async () => {
  let summonerPuuid = await getSummerPuuid();
  let matchList = await getListOfMatches(summonerPuuid);
  let singleMatch = await getSingleMatch(matchList[0], summonerPuuid);
  console.log(singleMatch);
}

testAPI();

app.listen(port, ()=> {
  console.log(`app is listening on port ${port}`);
})
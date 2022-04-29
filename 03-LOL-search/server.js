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
  let positionInArr = null;
  let matchInfo = null;
  const match = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${process.env.riot_api_key}`)
  .then(data => {
    let participantsArr = data.data.metadata.participants
    for(let i = 0; i < participantsArr.length; i++) {
      if(participantsArr[i] === puuid) {
        positionInArr = i;
      }
    }

    // console.log(data.data.info.teams)
    matchInfo = {
      match: {
        gameEndTimestamp: data.data.info.gameEndTimestamp,
        gameDuration: data.data.info.gameDuration,
        win: data.data.info.participants[positionInArr].win
      },
      singleChar: {
        teamId: data.data.info.participants[positionInArr].teamId,
        champion: data.data.info.participants[positionInArr].championName,
        summonerSpell1: data.data.info.participants[positionInArr].summoner1Id,
        summonerSpell2: data.data.info.participants[positionInArr].summoner2Id,
        items: {
          0: data.data.info.participants[positionInArr].item0,
          1: data.data.info.participants[positionInArr].item1,
          2: data.data.info.participants[positionInArr].item2,
          3: data.data.info.participants[positionInArr].item3,
          4: data.data.info.participants[positionInArr].item4,
          5: data.data.info.participants[positionInArr].item5,
          6: data.data.info.participants[positionInArr].item6,
        },
        stats: {
          assists: data.data.info.participants[positionInArr].assists,
          deaths: data.data.info.participants[positionInArr].deaths,
          kills: data.data.info.participants[positionInArr].kills,
          dk: data.data.info.participants[positionInArr].doubleKills,
          tk: data.data.info.participants[positionInArr].tripleKills,
          qk: data.data.info.participants[positionInArr].quadraKills,
          pk: data.data.info.participants[positionInArr].pentaKills,
        },
        stats2: {
          // killPar: Math.round((data.data.info.participants[positionInArr].assists + data.data.info.participants[positionInArr].kills) / ),
          controlWards: data.data.info.participants[positionInArr].visionWardsBoughtInGame,
          cs: data.data.info.participants[positionInArr].neutralMinionsKilled + data.data.info.participants[positionInArr].totalMinionsKilled
        }
      }
      
    }

    console.log(data.data.info.participants[positionInArr]);
    console.log(data.data.info.teams[1]);
    
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
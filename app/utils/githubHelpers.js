import axios from 'axios';

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id=" + id + "&client_secret=" + sec;

function getPlayerInfo(username) {
  return axios.get("https://api.github.com/users/" + username);
}
function getRepos(playerObj) {
  return axios.get(playerObj.repos_url); // => repos Object
}
function getStargazersCount(reponse) {
  return reponse.data.reduce((total, currentRepo) => {
      total += currentRepo.stargazers_count;
      return total;
   },0)
}
function getPlayersData(playerObj) { // returning star count 
  return getRepos(playerObj).then(getStargazersCount)
  .then(function(totalStars) {
    return {
      totalStars: totalStars,
      followers: playerObj.followers
    }
  })
}
function calculateScores(playerStats) {
  return (playerStats.followers * 3) + playerStats.totalStars; 
}
var helpers = {
  getPlayersInfo: function(userNames) {
   return axios.all(userNames.map((userName) => {
     return getPlayerInfo(userName)
   }))
    .then((response) => {
     return response.map((userInfo) => {
       return userInfo.data // return data objects for players
    })
   })
  },
  battle: function(playersInfo) {
   var res = playersInfo.map((player) => {
     return getPlayersData(player)
            .then(calculateScores)
            .then((scores) => {
              return scores
            })
   })
   return axios.all(res).then((scores) => {
     console.log(scores);
     return scores;
   })
   
  //  console.log('Final',res);
  }
};

export default helpers;
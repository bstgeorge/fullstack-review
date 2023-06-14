const axios = require('axios');
const config = require('../config.js');
//import { Octokit } from 'octokit';


let getReposByUsername = (username, callback) => {
  let options = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  axios({
    method: 'get',
    url: 'https://api.github.com/user/repos',
    //url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${config.TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
      // 'User-Agent': 'request',
      // 'owner': `${username}`,
      // 'Authorization': `token ${config.TOKEN}`
    }
  })
  .then( (response) => {
    console.log(`github request successful`);
    callback(response.data);
  })
  .catch ( (error) => {
    console.log('error: ', error);
  })

  // TODO - Use the axios module to request repos for a specific
  // user from the github API


  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

}
module.exports.getReposByUsername = getReposByUsername;
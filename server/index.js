const express = require('express');
let app = express();
const path = require('path');
const getRepos = require('../helpers/github').getReposByUsername;
const saveRepos = require('../database/index').save;
// var router = express.Router();

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.static(path.join(path.resolve(), 'client', 'dist' )));
app.use(express.urlencoded({ extended: true }));

// router.use('/repos', (req, res, next) => {
//   console.log('made it here first: ', req.body);
//   // all requests to this router will first hit this middleware
// });


app.post('/repos', function (req, res) {
  getRepos(req.body.username, saveRepos);
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // res.render('index');
  console.log(path.join(path.resolve(),'client','dist','index.html'))
  res.sendFile(path.join(path.resolve(),'client','dist','index.html'));

  //res.send('Hello World!');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

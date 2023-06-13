const express = require('express');
let app = express();
const path = require('path')

//path.join(path.resolve(), 'client');


// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.static(path.join(path.resolve(), 'client', 'dist' )));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.send(('Got a POST request'));

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  //res.render('index');
  console.log(path.join(path.resolve(),'client','dist','index.html'))
  res.sendFile(path.join(path.resolve(),'client','dist','index.html'));

  //res.send('Hello World!');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

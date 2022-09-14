const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/build/'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});
app.get('/ping', function (req, res) {
  return res.send('pong');
 });
app.listen(process.env.PORT || 8080);
app.listen(port, () => {
  console.log('Server is up!');
});


const express = require('express');
const app = express();

var port=porcess.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
});

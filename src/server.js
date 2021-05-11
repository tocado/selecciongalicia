const express = require('express');
const app = express();
app.listen(80, function() {
  console.log('Abriendo Puerto 80')
});

app.get('/', function (request, response) {
   console.log("peticion de /");
   response.sendFile(__dirname + '/index.html')
});

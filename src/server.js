const express = require('express');
const bodyParser= require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//por debajo del puerto 1024 son puertos privilegiados
app.listen(3000, function() {
  console.log('Abriendo Puerto 3000');
});


//directorio estatico de imagenes
app.use('/images',express.static('images'));


app.get('/', function (request, response) {
   console.log("peticion de /");
   response.sendFile(__dirname + '/index.html')
});

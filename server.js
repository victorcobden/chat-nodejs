var express = require('express');

var server = express();

require('./controllers/home')(server);

server.listen(4000);

console.log('Servidor iniciado');
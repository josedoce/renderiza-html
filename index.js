const express = require('express');
const path = require('path');
const app = express();
const rota = require('./paginas/declarar_pagina');



 //use public como pasta de arquivos estaticos
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', rota);

// endereço em caso de desenvolvimento http:localhost:3000
app.listen(3000||process.env.PORT);


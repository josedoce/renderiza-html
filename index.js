const express = require('express');
const path = require('path');
const app = express();
const rota = require('./paginas/declarar_pagina');
const PORT = process.env.PORT || 5000;



 //use public como pasta de arquivos estaticos
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', rota);

// endereço em caso de desenvolvimento http:localhost:5000
app.listen(PORT, () => console.log(`Rodando na ${ PORT }`));

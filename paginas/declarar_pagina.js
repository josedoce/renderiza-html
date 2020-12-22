const express = require('express')
const rota = express.Router()
const path = require('path')

function nomePagina(a){
    return path.join(__dirname+`/${a}`) //diretorio das paginas
}

//crie uma propriedade que representa a pagina
const pagina = {
    index:  (req, res)=>{
        res.sendFile(nomePagina('index.html')) //resposta.envieArquivo(doDiretorio(oArquivo.html))
    },
    pagina2:  (req, res)=>{
        res.sendFile(nomePagina('pagina2.html'))
    },
    pagina3: (req, res)=>{
        res.sendFile(nomePagina('pagina3.html'))
    },
    error404: (req, res)=>{
        res.sendFile(nomePagina('404.html'))
    }
}
//ao criar uma pagina no objeto paginas, insira ela na rota tambem
rota
    .get('/', pagina.index) //index, essa pagina deve ser a primeira

    .get('/pagina2', pagina.pagina2)
    .get('/pagina3',pagina.pagina3)

    .get('/*',pagina.error404) //404, essa pagina deve ser sempre a ultima

module.exports = rota
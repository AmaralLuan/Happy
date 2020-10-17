const express = require('express');
const pages = require('./pages.js');

const server = express();

const path = require('path');

// chamando o server

server

// utilizar body do req

.use(express.urlencoded({extended: true}))

// utilizando arquivos estáticos

.use(express.static('public'))

// configurar template

.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas da aplicação
.get('/', pages.index)
.get('/orphanange', pages.orphanange)
.get('/orphananges', pages.orphananges)
.get('/create-orphanange', pages.createOrphanange)
.get('/orphanangeList', pages.orphanangeList)



.post('/save-orphanange', pages.saveOrphanange)
// ligar servidor

server.listen(5510)
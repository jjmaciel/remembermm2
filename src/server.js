require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRouters = require("./routers");

/*O express em resumo manipula solicitações com diferentes verbos HTTP em diferentes caminhos de URL (rotas). */
const server = express();

/*
cors é um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens
 */
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use('/', apiRouters);

/* Mostra mensagem no console mosrtando em que porta está rodando o servidor */
server.listen(process.env.PORT, () => {
    console.log(`Servidor Rodando em ${process.env.BASE}`)
})

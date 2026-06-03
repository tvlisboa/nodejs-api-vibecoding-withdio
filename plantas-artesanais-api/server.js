/**
 * Responsável pela 
 * inicializacao do servidor
 */

//importa o arquivo onde tem o express
const express = require("express")
const app = require("./src/app");


// const app = express();

app.use(express.json());

/**
 * onde sera habilitado a porta de inicio
 */

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});
/**
 * Responsável pela 
 * inicializacao do servidor
 */

const app = require("./src/app");

/**
 * onde sera habilitado a porta de inicio
 */

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});
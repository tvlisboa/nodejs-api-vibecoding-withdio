/**
 * Array mocado para pratica
 */

const Client = require("../../models/clients.models")
/**
 * array de clientes em json
 * os clientes serao armazenados aqui
 */

/**
 * Quando cadastramos pessoa fisica, o cnpj fica vazio
 * e quando cadastramos pessoa juridica, o cpf fica vazio
 */

const clients = [
    new Client(
        1,
        "Arnaldo Lima",
        "Pessoa Fisica",
        "812.469.507-58",
        ""
    ),
    new Client(
        2,
        "Mariana Tavares",
        "Pessoa Fisica",
        "552.183.147-90",
        ""
    ),
    new Client(
        3,
        "Flores Do Brasil LTDA",
        "Pessoa Juridica",
        "",
        "50.007.426/0001-45"
    ),
    new Client(
        4,
        "Larissa Waiandt",
        "Pessoa Juricia",
        "",
        "38.373.395/0001-40"
    ),
    new Client(
        5,
        "Roberto Carlos",
        "Pessoa Fisica",
        "854.457.824-17",
        ""
    )
];


module.exports = clients;
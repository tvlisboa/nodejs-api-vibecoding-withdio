/**
 * Array mocado para pratica
 */

const Product = require("../../models/products.models")

/**
 * array de produtos em json
 * os produtos serao armazenados aqui
 */

const products =[
    new Product(
        1,
        "Palmeira Fenix",
        "Plantas Ornamentais",
        220.00,
        15,
        "Flores Brasil",
        "Verde e Branca",
        "Medio",
        "Planta tropical para ambientes externos"
    ),
    new Product(
        2,
        "Buxinho Bola",
        "Arbustos para jardim",
        18.00,
        10,
        "Garden Flowers",
        "Verde",
        "Pequena",
        "Arbusto de facil manutencao"
    ),
    new Product(
        3,
        "Samambaia Americana",
        "Folhagens espessas",
        49.90,
        5,
        "Verde Vida",
        "Verde e Marrom",
        "Grande",
        "Ideal para jardins suspensos"
    ),
    new Product(
        4,
        "Suculenta Echeveria",
        "Suculentas",
        19.90,
        50,
        "Suculentas Brasil LTDA",
        "Amarelas",
        "Pequena",
        "Plantas resistentes e decorativas"
    ),
    new Product(
        5,
        "Cactos Mandacaru",
        "Cactos",
        25.90,
        12,
        "Nordestes Plantas",
        "Marrom e amarelo",
        "Grande",
        "Cacto tipico da caatinga Brasileira"
    )
];


module.exports = products;
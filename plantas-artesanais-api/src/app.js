/**
 * Responsavel por
 * configurar o express
 * middlewares
 * routes
 */

const express = require("express");

const productsRoutes = require("./routes/products.routes");

const app = express();

app.use(express.json());

app.use("/products", productsRoutes);

module.exports = app;
/**
 * Responsavel
 * por definir os
 * endpoints HTTP
 */

const express = require("express");

const router = express.Router();

const {
    createdProduct,
    findProducts,
    findProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/products.controller");

//inserir produto
router.post("/", createdProduct);

//procurar produtos
router.get("/", findProducts);

//procurar produto por id
router.get("/:id", findProductById);

//atualizar produto
router.put("/:id", updateProduct);

//delete product
router.delete("/:id", deleteProduct);

module.exports = router;
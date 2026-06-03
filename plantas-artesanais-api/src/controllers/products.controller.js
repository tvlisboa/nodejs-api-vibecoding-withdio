    /**
     * Contém a lógica da api
     */

const {v4 : uuidv4} = require("uuid");
const Product = require("../models/products.models");
const products = require("../database/db");
const { json } = require("express");
const { clients } = require("../database/database");

    /**
     * inserir produto
     * post/products
     * responsavel por criar produtos
     */

const createdProduct = (req, res) =>{
    const{
        name,
        category,
        price,
        stock,
        description,
        supplier,
        color,
        size
    } = req.body;

    /**
     * validações e normas de negocio
     */


    //se nao tiver nome ou for vazio
    if(!nome || nome.trim() ===""){
        return res.status(400).json({
            erro : "O nome do produto é obrigatório"
        });
    }

    //se nao informar a categoria ou for vazia
    if(!category || category.trim() ===""){
        return res.status(400).json({
            erro : "Categoria deve ser informada"
        });
    }

    //se o preco nao for infomado ou menor do que zero
    if(price === undefined || price <=0){
        return res.status(400).json({
            erro : "O preco informado é invalido"
        });
    }

    //se o estoque nao for informado ou menor que 0
    if(stock === undefined || stock <=0){
        return res.status(400).json({
            erro : "Estoque invalido"
        })
    }

    //criacao do produto com atributos
    const newProduct = new Product(
        uuidv4(),
        name,
        category,
        price,
        stock,
        supplier,
        color,
        size,
        description,
    );

    //salva o produto
    products.push(newProduct);

    //retorna o codigo http
    return res.status(201).json({
        message: "Produto criado com sucesso",
        product : newProduct
    });
};

//fim da criacao de produto

    /**
     * Metodos http
     * read
     * get/products
     * Responsavel por buscar informacoes, listar somente os produtos ativos
     */

//filtrar somente por produtos ativos
const findProducts = (req, res) =>{
    const productsActive = products.filter(
        product => product.active
    );
    return res.status(200).json(productsActive);
};

    /**
     * read
     * get/products/id
     * procura o produto por id
     */

//procura o produto por id
const findProductById = (req, res) => {
    const {id} = req.params;

    const product = products.find(
        product => product.id === id && product.active
    );

    //nao achando o produto por id, retorna mensagem de erro
    if(!product){
        return res.status(404).json({
            erro : "Produto informado nao foi encontrado"
        });
    }
    //caso ocorra tudo bem, retorna mensagem ok e o produto em json
    return res.status(200).json(product)
}

    /**
     * update
     * put/products/id
     * atualiza o produto existente pelo id informado
     */

const updateProduct = (req, res) => {
    const { id } = req.params;

    //PRODUTO SENDO ACHADO POR ID E ESTANDO ATIVO
    const product = products.find(
        product => product.id === id && product.active
    );

    //caso nao ache o produto por id , envia um erro
    if(!product){
        return res.status(404).json({
            erro : "Produto informado nao foi encontrado"
        });
    }

    //caso ocorra tudo bem, atualiza as informacoes a seguir
    const{
        name,
        category,
        price,
        stock,
        supplier,
        color,
        size,
        description
    } = req.body;

    /**
     * Validações de cadastro
     */

    if(name !== undefined && name.trim()===""){
        return res.status(400).json({
            erro : "Nome informado é invalido"
        });
    }

    if(category !== undefined && category.trim() ===""){
        return res.status(400).json({
            erro : "Categoria informada é invalida"
        });
    }

    if(price !== undefined && price <=0){
        return res.status(400).json({
            erro : "Preco informado é invalido"
        });
    }

    if(stock !== undefined && stock <=0){
        return res.status(400).json({
            erro : "O estoque informado é invalido"
        });
    }

    /**
     * Atualizacao dos dados
     */

    product.name = name ?? product.name;
    product.category = category ?? product.category;
    product.price = price ?? product.price;
    product.stock = stock ?? product.stock;
    product.supplier = supplier ?? product.supplier;
    product.color = color ?? product.color;
    product.size = size ?? product.size;
    product.description = description ?? product.description;

    /**
     * Dados para auditoria
     */

    product.updateDate();

    return res.status(200).json({
        message : "Produto atualizado com sucesso",
        product
    });

};

    /**
     * delete logico
     * somente inativa em banco
     * delete/products/id
     */

const deleteProduct = (req, res) =>{
    const { id } = req.params;

    /**
     * Validacoes
     */

    if(!id){
        return res.status(400). json({
            erro : "Id é obrigatório"
        });
    }

    const product = products.find(
        product => product.id === id && product.active
    );

    if(!product){
        return res.status(404).json({
            erro : "Produto nao encontrado"
        });
    }

    /**
     * Soft delete
     * nao exclui o produto, apenas o desativa
     */

    product.active = false;
    product.updateDate();


    return res.status(200).json({
        message : "Produto informado, inativado"
    });
};

module.exports={
    createdProduct,
    findProducts,
    findProductById,
    updateProduct,
    deleteProduct
}
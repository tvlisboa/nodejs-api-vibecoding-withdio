/**
 * estrutura do produto
 * classe, atributos e metodos
 */

class Product{
    constructor(
        id,
        name,
        category,
        price,
        stock,
        supplier,
        color,
        size,
        description
    ){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
        this.supplier = supplier;
        this.color = color;
        this.size = size;
        this.description = description;
        
        //dados para auditoria
        this.active = true;
        this.createdAt = new Date();
        this.updateAt = new Date();
    }

    /**
     * Metodo responsavel por atualizacao
     * data de modificacao
     */

    updateDate(){
        this.updateAt = new Date();
    }
}

module.exports = Product;
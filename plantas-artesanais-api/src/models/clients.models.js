/**
 * Estrutura do cliente
 * classe, atributos e seus metodos
 */

class Client{
    constructor(
        id,
        name,
        type,
        cpf,
        cnpj,
    ){
        this.id = id;
        this.name = name;
        this.type = type;
        this.cpf = cpf;
        this.cnpj = cnpj;

        //dados para auditoria
        this.status = true;
        this.dateCreated = new Date();
        this.updateAt = new Date();
    }

    
    /**
     * Metodo responsavel por atualizacao ou
     * data de modificacao do meu cliente
     */

    updateDate(){
        this.updateAt = new Date();
    }
}

module.exports = Client;
/**
 * Classe intermediaria entre o cliente
 * e seus contatos
 * estrutura da classe, atributos e metodos
 */

class Contatos{
    constructor(
        telefone,
        email,
    ){
        this.telefone = telefone;
        this.email = email;

        /**
         * dados para auditoria da atualizacao dos dados de  contato
         */

        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.deletedAt = new Date();
    }

    /**
     * Metodo responsavel pela atualizacao dos contatos
     */

    updateDate(){
        this.updatedAt = new Date();
    }

    deleteDate(){
        this.deletedAt = new Date();
    }
}

module.exports = Contatos;
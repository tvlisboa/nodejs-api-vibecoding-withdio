/**
 * estrutura da classe de enderecos
 * classe, atributos e metodos
 */

class Endereco{
    constructor(
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        cep,
        pais
    ){
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.pais = pais

        //dados para auditoria de atualizacao cadastral
        this.createdAt = new Date();
        this.updateAt = new Date();
    }


    /**
     * Metodo responsavel pela atualizacao cadastral
     */

    updateDate(){
        this.updateAt = new Date();
    }


    /**
     * Inserir um novo metodo
     * Sera responsavel por novo cadastro de endereco
     */

    
}

module.exports = Endereco;
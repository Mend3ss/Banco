export class Cliente {
    nome;
    #cpf;

    get cpf(){
        this.#cpf
    }

    constructor(nome, cpf){
        this.nome = nome
        this.#cpf = cpf
    }
}
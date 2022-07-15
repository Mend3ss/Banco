import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    cliente;

    #saldo = 0;
    #senha;

    constructor(cliente, agencia, senha){
        this.cliente = cliente
        this.agencia = agencia
        this.senha = senha
    }

    //Verificando senha

    autentica(senha) {
        if (this.senha == senha) {
            console.log(`Senha correta \n Ola`, this.cliente )
            this.#senha = true
        } else {
            console.log("Senha incorreta \n")
            this.#senha = false
        }
    }

    //Deposito
    depositar(valor, senha) {
        if (valor > 0 && this.#senha == true) {
            console.log("Fazendo deposito de: ", valor)
            this.#saldo += valor;
            console.log("Deposito realizado com sucesso, voce possui", this.#saldo, "\n")

            //Privando senha
            this.senha = this.#senha

            //Condição: senha incorreta
        } else if(this.#senha == false){
            console.log("Senha incorreta")
            
            //Privando senha
            this.senha = this.#senha
        }
        
        //Condição: Deposito negativo
        else {
            console.log("Operacao negada deposite um valor maior que R$ 1")
            //Privando senha
            this.senha = this.#senha
        }
    }

    get saldo(){
        this.#saldo
    }

    //Saque
    sacar(valor, senha) {
        if (this.#saldo >= valor && this.#senha == true) {
            console.log("Verificando senha...")
            console.log("saque permitido... Sacando", valor)
            this.#saldo -= valor;
            console.log("Saque realizado com sucesso, voce possui", this.#saldo, "\n")
            
            //Privando senha
            this.senha = this.#senha

            //Condição: senha incorreta
        } else if (this.#senha == false) {
            console.log("Verificando senha... Senha incorreta")
        }
        //Condição: sem fundos
        else {
            console.log("Saque negado, voce nao possui fundos suficientes para sacar:", valor)
            console.log("Voce possui", this.#saldo)
        }
    }

    

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valor)
    }

    //Dica if:
    // Se o parametro passado para cliente for da class Cliente() ele irá passar as informações da class Cliente

    //Exemplo:
    //ContaCorrente.cliente = addNome
    
    //Se o addNome for uma variavel que pertence a class Cliente(), por exemplo cliente2. Entao addNome = cliente2, que pertence a class Cliente()

    //contaCorrenteAlice.cliente = cliente2
    
    set cliente(addNome){
        if (addNome instanceof Cliente) {
            this.cliente = addNome
        }
    }


    get cliente(){
        return this.cliente
    }
}
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",11122233309 );

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001, 123, 555)

//Verificando senha
contaCorrenteRicardo.autentica(123,555)

//Senha secundaria

//Deposito
contaCorrenteRicardo.depositar(500)

//Saque
contaCorrenteRicardo.sacar(40)







//Cliente 2
const cliente2 = new Cliente("Alice",88822233309 );

const contaCorrenteAlice = new ContaCorrente(cliente2, 1001, 321, 666)

//Verificando senha
contaCorrenteAlice.autentica(321, 666)


//Deposito
//contaCorrenteAlice.depositar(100)

//Saque
//contaCorrenteAlice.sacar(40)

//console.log(contaCorrenteRicardo)


//Transferencia
contaCorrenteRicardo.transferir(100,contaCorrenteAlice)

console.log(contaCorrenteAlice)
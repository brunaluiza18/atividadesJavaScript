const leia = require('readline-sync')

let numero

//Entrada de dados
numero = leia.questionInt("Digite um numero: ")

//Processamento
if (numero > 0) {
    if (numero % 2 == 0) {
        console.log("O Numero " + numero + " é par e positivo!")
    } else {
        console.log("O Numero " + numero + " é ímpar e positivo!")
    }
} else if (numero < 0) {
    if (numero % 2 == 0) {
        console.log("O Numero " + numero + " é par e negativo!")
    } else {
        console.log("O Numero " + numero + " é ímpar e negativo!")
    }
} 
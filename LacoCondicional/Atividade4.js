const leia = require('readline-sync')

let numero1, numero2, operacao

//Entrada de dados
numero1 = leia.questionFloat("Digite o 1 numero: ")
numero2 = leia.questionFloat("Digite o 2 numero: ")
operacao = leia.questionInt("Operacao: ")

//Processador
switch (operacao) {
    case 1:
        console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2))
        break 
    case 2:
        console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2))
        break
    case 3:
        console.log(numero1 + " * " + numero2 + " = " + (numero1 * numero2))
        break
    case 4:
        console.log(numero1 + " / " + numero2 + " = " + (numero1 / numero2))
        break
    
    default:
        console.log("Operação Inválida!")
}
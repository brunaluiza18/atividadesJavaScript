const leia = require('readline-sync')

console.log("Digite o Salário: ")
salario = parseFloat (leia.question())

console.log("Digite o Abono")
abono = parseFloat (leia.question())

let salariofinal = salario + abono

console.log("Seu salário vai ser de: " + salariofinal)
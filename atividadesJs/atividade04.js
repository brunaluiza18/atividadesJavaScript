const leia = require('readline-sync')

let n1, n2, n3, n4
let diferencia

console.log("\nentrada de valores")

n1 = leia.questionFloat("Digite o valor n1: ")
n2 = leia.questionFloat("Digite o valor n2: ")
n3 = leia.questionFloat("Digite o valor n3: ")
n4 = leia.questionFloat("Digite o valor n4: ")

const produto1 = n1 * n2
const produto2 = n3 * n4
diferencia = produto1 - produto2

console.log("Resultado é: " + diferencia)

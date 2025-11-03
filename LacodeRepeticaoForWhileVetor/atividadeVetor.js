const leia = require("readline-sync")

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
let contador, numero
let encontrado = false

numero = leia.question("Digite o numero que voce deseja encontrar: ")

for (contador = 0; contador < 10; contador++) {
    if (vetor[contador] == numero) {
        console.log("O numero " + numero + " esta localizado na posicao: " + contador)
        encontrado = true
    }
}
if (encontrado == false) {
    console.log("O numero " + numero + " nao foi encontrado!")
}
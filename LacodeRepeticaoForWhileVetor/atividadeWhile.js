const leia = require("readline-sync")
let idade
let totalMenor21 = 0
let totalMaior50 = 0

idade = leia.question("Digite uma idade: ")

while (idade >= 0) {

    // 5. Verificamos se a idade é menor que 21
    if (idade < 21) {
        totalMenor21++
    }
    else if (idade > 50) {
        totalMaior50++
    }
    idade = leia.question("Digite uma idade: ")
}
console.log("Total de pessoas menores de 21 anos: " + totalMenor21)
console.log("Total de pessoas maiores de 50 anos: " + totalMaior50)
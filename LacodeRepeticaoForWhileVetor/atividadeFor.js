const leia = require("readline-sync")

let numero, contador, totalPares = 0, totalImpares = 0

for (contador = 1;contador < 11; contador++) {

    numero = leia.question("Digite o " + contador + ". numero: ")

    if (numero % 2 == 0) {
        totalPares++
    } else {
        totalImpares++
    }
}
console.log("Total de números pares: " + totalPares)
console.log("Total de números ímpares: " + totalImpares)
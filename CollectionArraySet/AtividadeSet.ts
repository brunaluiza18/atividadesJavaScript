import leia = require("readline-sync")

const numerosSet: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6])

let numero = parseInt(leia.question("Digite o numero que voce deseja encontrar: "))

if (numerosSet.has(numero)) {

    console.log(`O Número ${numero} foi encontrado!`)

} else {
    
    console.log(`O número ${numero} não foi encontrado!`)

}
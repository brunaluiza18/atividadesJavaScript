import leia = require("readline-sync")

const cores: Array<string> = new Array<string>()

for (let contador = 1; contador < 6; contador++) {

    let corDigitada = leia.question(`Digite a ${contador} cor: `)

    cores.push(corDigitada)
}
console.log("\nListar todas as cores:")
for(let cor of cores){
    console.log(cor)
}
cores.sort()
console.log("\nOrdenar as cores:")
for(let cor of cores){
    console.log(cor)
}
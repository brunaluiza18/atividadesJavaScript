const leia = require('readline-sync')

let codigo, quantidade
let preco
let total

//Entrada de dados
codigo = leia.questionInt("Codigo do Produto: ")
quantidade = leia.questionInt("Quantidade: ")

//Processador
switch (codigo) {
    case 1:
        console.log("Produto: Cachorro Quente")
        preco = 10.00
        total = quantidade * preco
        console.log("Valor total: R$ " + total)
        break
    
    case 2:
        console.log("Produto: X-Salada")
        preco = 15.00
        total = quantidade * preco
        console.log("Valor total: R$ " + total)
        break
    
    case 3:
        console.log("Produto: X-Bacon")
        preco = 18.00
        total = quantidade * preco
        console.log("Valor total: R$ " + total)
        break
    
    case 4:
        console.log("Produto: Bauru")
        preco = 12.00
        total = quantidade * preco
        console.log("Valor total: R$ " + total)
        break
    
    case 5:
        console.log("Produto: Refrigerante")
        preco = 8.00
        total = quantidade * preco
        console.log("Valor total: R$ " + total)
        break
    
    case 6:
        console.log("Produto: Suco de laranja")
        preco = 13.00
        total = quantidade * preco
        console.log("Valor total: R$ " + total)
        break
    
    default:
        console.log("Opção Inválida")
}
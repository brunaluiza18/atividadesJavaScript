import { Queue } from "./Queue"
import leia = require("readline-sync")

const filaClientes = new Queue<string>()
let option

do {
    console.log("\nMenu:")
    console.log("1 - Adicionar Cliente na Fila")
    console.log("2 - Listar todos os Clientes")
    console.log("3 - Retirar Cliente da Fila")
    console.log("0 - Sair ")
 
    option = leia.question("\nDigite uma opcao: ")

    switch (option) {

        case "1": 
            const nome = leia.question("\nDigite o nome: ")
            filaClientes.enqueue(nome)
            console.log("\nFila: ")
            filaClientes.printQueue()
            console.log("\nCliente Adicionado!\n")
            break

        case "2": 
            if (filaClientes.isEmpty()) { 
                console.log("\nA Fila esta vazia!\n") 
            } else {
                console.log("\nLista de Clientes na Fila: ") 
                filaClientes.printQueue()
                console.log(" ")
            }
            break;

        case "3": 
            if (filaClientes.isEmpty()) { 
                console.log("\nA Fila esta vazia!\n")
            } else {
                filaClientes.dequeue()
                console.log("\nFila: ") 
                filaClientes.printQueue() 
                console.log("\nO Cliente foi Chamado!\n")
            }
            break

        case "0": 
            console.log("\nPrograma Finalizado!\n")
            break
    }
} while (option != "0")
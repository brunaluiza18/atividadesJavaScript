import { Stack } from "./Skack"
import * as readLine from 'readline-sync' 

const pilhaLivros = new Stack<string>()
let option

do {
    console.log("\nMenu:")
    console.log("1 - Adicionar Livro na Pilha")
    console.log("2 - Listar todos os Livros")
    console.log("3 - Retirar Livro da Pilha")
    console.log(" 0 - Sair")
   
    option = readLine.question("\nDigite uma opcao: ")

    switch (option) {

        case "1": 
            const nome = readLine.question("\nDigite o nome: ")
            pilhaLivros.push(nome)
            console.log("\nPilha: \n")
            pilhaLivros.printStack()
            console.log("\nLivro adicionado!\n")
            break
        case "2":
            console.log("\nLista de Livros na Pilha: \n")
            pilhaLivros.printStack()
            console.log("\n")
            break
            case "3":
            if (pilhaLivros.isEmpty()) {
                console.log("\nA Pilha está vazia!\n")
            } else {
                pilhaLivros.pop()
                console.log("\nPilha: \n")
                pilhaLivros.printStack();
                console.log("\nUm Livro foi retirado da pilha!\n")
            }
            break
        case "0":
            console.log("\nPrograma Finalizado!\n")
            break
    }
} while (option != "0")
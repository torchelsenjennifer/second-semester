import prompt from "prompt-sync"
import { Personagem } from "./Personagem";

let teclado = prompt()
let option = 0 
// console.log("Running..."); //Inicializando a apresentação
// const mage: Personagem = new Personagem("Macgyver", "Mago"); // Definição do Objeto 
// //mage.raca = "Undead";
// console.log(".......");
// console.log("mage :>> ", mage);

// console.log("Finalizou!");

//const mage: Personagem = new Personagem();

function CriarMage(){
    const mage: Personagem = new Personagem();
}


while(option != 5){
    console.log("============= MENU PRINCIPAL==========")
    console.log("| 1- Listar mage?                    |")
    console.log("| 2- Criar mage?                    |")
    console.log("| 3- Alterar mage?                  |")
    console.log("| 4- Excluir mage?                  |")
    console.log("| 5- Finalizar?                      |")
    console.log("=====================================")

    option = +teclado("Escolha uma opção:")

    switch (option) {
        case 1:

            break;
        case 2:
           CriarMage();
            break;
        case 3:

            break;
        case 4:

            break;
        case 5:
            break;
        default:
            break;
    }

}



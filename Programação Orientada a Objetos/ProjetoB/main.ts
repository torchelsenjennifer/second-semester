import { Animal } from "./Animal";
import prompt from "prompt-sync";

let teclado = prompt();
let option: number = 0;
console.log(" ")
let tipo = teclado("Digite a raça do animal: ");
let nome = teclado("Digite o nome do animal: ");

let animal: Animal = new Animal(
    tipo,
    nome,
    50,
    50,
    50,
    50
);

while (option != 5 && !animal.isAngry()) {
    console.log("\n+======= Meu Animal Virtual  ========+");
    console.log("|1. Quer Comer?                        |");
    console.log("|2. Quer Dormir?                       |");
    console.log("|3. Quer Banho?                        |");
    console.log("|4. Quer Brincar?                      |");
    console.log("|5. Quer Sair?                         |");
    console.log("+======================================+");

    option = +teclado("Escolha uma ação para o seu Pet: ");

    switch (option) {
        case 1:
            animal.comer();
            console.log(animal.status());
            break;
        case 2:
            animal.dormir();
            console.log(animal.status());
            break;
        case 3:
            animal.banho();
            console.log(animal.status());
            break;
        case 4:
            animal.brincar();
            console.log(animal.status());
            break;
        case 5:
            console.log("Finalizado!");
            break;
        default:
            break;
    }
}
if(animal.isAngry()){
    console.log(`\n${animal.nome} fugiuuuu !!!`);
}


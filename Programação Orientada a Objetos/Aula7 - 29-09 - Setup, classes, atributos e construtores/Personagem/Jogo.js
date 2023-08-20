"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const prompt = require('prompt-sync')();
const Personagem_1 = require("./Personagem");
console.log("Running..."); //Inicializando a apresentação
const mage = new Personagem_1.Personagem("Macgyver", "Mago"); // Definição do Objeto 
mage.raca = "Undead";
console.log(".......");
console.log("mage :>> ", mage);
console.log("Finalizou!");

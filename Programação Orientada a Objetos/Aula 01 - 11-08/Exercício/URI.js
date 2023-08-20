
const prompt = require ("prompt-sync")()

const a = Number(prompt(""))
const b = Number(prompt(""))

soma = a + b;

console.log(`SOMA =,${soma} `)

//==================AULA DIA 11 ====================================
var input = require('fs').readFileSync('/dev/stdin', 'utf8'); //PARA LER O ARQUIVO DO URI, posso renomer
var lines = input.split('\n'); //INTERPRETAR OS CARACTRES 

const usuario = "jennifer Schwanz Torchelsen;9630-000;53981052090;senha"
//const name = "Jennifer | schwanz | torchelsen"
//                 0          1         2
const partes = usuario.split(";")
console.log("partes[0] :>>", partes[1]); 

//RESOLUÇÃO EXERCICIO 2 
console.log("lines :>>", lines)
const n1 = +lines[0];
const n2 = +lines[1];
//const n1 = +lines.shift(); outra forma com referencia
//const n2 = +lines.shift(); outra forma com referencia

console.log(`SOMA = ${n1 + n2}`);
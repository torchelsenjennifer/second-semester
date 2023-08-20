const input = require("fs").readFileSync("3302", "utf8");
const lines = input.split("\n");

const quantidade = lines.shift()

for (let i = 0; i < quantidade; i++) {
    const numeros = lines[i].split(" ")
    //console.log('resposta 1: '${lines[]})
    //console.log(numeros)
    const valor = numeros.shift()
    //console.log(valor)

}
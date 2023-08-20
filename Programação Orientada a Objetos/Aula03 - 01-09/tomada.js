const input = require("fs").readFileSync("tomada", "utf8");
const lines = input.split("\n");

const quantidade = lines.shift()
//console.log(quantidade)

for (let i = 0; i < quantidade; i++) {
    let saida= 0
    const numeros = lines[i].split(" ")
   // console.log(numeros)
    const tiago = numeros.shift()
    //console.log(numeros)
    //console.log(tiago)

    for (let j = 0; j < tiago; j++) {
        saida += +numeros[j] 
    }
console.log(saida - (tiago - 1))
}


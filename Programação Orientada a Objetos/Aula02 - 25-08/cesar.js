const input = require('fs').readFileSync("cesar", "utf8")
const lines = input.split("\n")

let [quantidade, string,numero] = lines
const soma = []
quantidade = +quantidade
numero = +numero

for (let x = 0; x < quantidade; x++) {
    for (let y = 0; y < string.length; y++) {
        soma.push(string[y])   
    }
}
console.log(soma)
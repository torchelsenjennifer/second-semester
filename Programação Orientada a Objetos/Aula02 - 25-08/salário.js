const input = require('fs').readFileSync("salario", "utf8")
const lines = input.split("\n")

const [nomes, ganho, venda] = lines

console.log(`TOTAL = R$ ${((+venda * 0.15) + +ganho).toFixed(2)}`)

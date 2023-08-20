const input = require('fs').readFileSync("combustivel", "utf8")
const lines = input.split("\n")

const [tempo, distancia] = lines

console.log(((tempo * distancia)/12).toFixed(3))
const input = require('fs').readFileSync("3091", "utf8")
const lines = input.split("\n")

const a = +lines[0];
const b = +lines[1];

console.log(a%b)
const input = require('fs').readFileSync('3039', 'utf8');
const lines = input.split('\n');

const quantidade = lines.shift();
//console.log(quantidade)
let c = 0; b = 0, carrinhos = " ", bonecos = " "

for (let i = 0; i < quantidade; i++) {
    const brinquedo = lines[i].split(" ")
    if (brinquedo[1] == 'F') {
        c++
        carrinhos = 'carrinhos'
    }
    else if (brinquedo[1] == 'M') {
        b++
        bonecos = 'bonecas'
    }
}
console.log(`${c} `, carrinhos)
console.log(`${b} `, bonecos)
const input = require('fs').readFileSync('pedro', 'utf8');
const lines = input.split('\n');

const quantidade = lines.shift();
let bon = 0, arq = 0, mus = 0, des = 0

for (let i = 0; i < quantidade; i++) {
    const brinquedo = lines[i].split(" ")
    if (brinquedo[1] == 'bonecos') {
        bon += (brinquedo[2] / 8)
    }
    else if (brinquedo[1] == 'arquitetos') {
        arq += (brinquedo[2] / 4)
    }
    else if (brinquedo[1] == 'musicos') {
        mus += (brinquedo[2] / 6)
    }
    else if (brinquedo[1] == 'desenhistas') {
        des += (brinquedo[2] / 12)
    }
}
console.log(Math.floor(bon) + Math.floor(arq) + Math.floor(mus) + Math.floor(des))


// for (let i = 0; i < max; i++) {
//     const presente = lines[i].split(" ")
//     switch(lines[1]){
//     case 'bonecos' :
//         console.log("teste 1")
//     case 'arquitetos':
//         console.log("teste 2")
//     case 'desenhista':
//         console.log("teste 3")
//     case 'musicos':
//         console.log("teste 4")
//     default:
//         break;
// }
// }
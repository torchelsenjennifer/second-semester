const input = require('fs').readFileSync("noel", "utf8")
const lines = input.split("\n")
console.log("lines:>>",lines)

let b = 8, a = 4, m = 6, d = 12
let bon=0, arq=0, mus=0, dese=0

const quantidade = lines.shift()
console.log("Quantidade:>>",quantidade)
const brinquedo = lines.shift().split(" ")
console.log("Brinquedo:>>",brinquedo[1])
const horas = +lines[2]
console.log("Horas:",horas.shift())


// const horas = +lines[2]


for (let i =0; i < quantidade; i++) {
    //console.log("jennifer")
    if(nome[1] == 'bonecos'){
        console.log("bon");
        bon++
    }if(nome[1] == 'arquitetos'){
        console.log("arq")
        arq++
    }if(nome[1] == 'musicos'){
        console.log("mus")
        mus++
    }if(nome[1] == 'desenhistas'){
        console.log("dese")
        dese++
    }
}
resultado = resultado + (soma / b)
 console.log(resultadoBonecos)

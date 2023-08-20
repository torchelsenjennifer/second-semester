const input = require("fs").readFileSync("phd", "utf8");
const lines = input.split("\n");

let totalLinhas = lines.shift(); //4

for (let i = 0; i < totalLinhas; i++){
    const numeros = lines [i].split("+");
    //consolo.log("numeros:>>,numeros")
    if (numeros[0] == "P=NP"){
        console.log("skipped");
    } else {
        console.log(+numeros[0] + +numeros[1]);
    }
}
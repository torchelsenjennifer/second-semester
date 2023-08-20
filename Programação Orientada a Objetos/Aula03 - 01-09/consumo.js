const input = require('fs').readFileSync("consumo", "utf8")
const lines = input.split("\n")
//1º input nada mais é que a leitura do arquivo
//2º pegar de forma individual, por isso o /n e guarda no lines
//3º fica em string
//4º 500 = lines[0]
//5º colocamos o + = 500 = +lines[0] = distancia
//6ª 35 = lines[1] = consumo
//7º console.log("distancia:>>",distancia);
//8º console.log("consumo:>>",distancia);

const distancia = +lines.shift();
const combustivel = +lines.shift();

//const media = distancia/consumo

console.log(`${(distancia/combustivel).toFixed(3)} km/l`)
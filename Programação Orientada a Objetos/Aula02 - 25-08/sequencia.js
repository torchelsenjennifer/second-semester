const input = require('fs').readFileSync("sequencia", "utf8")
const lines = input.split("\n")

console.log("lines :>> ", lines ); //teste para ver o que há

while(true){
    const partes = lines.shift().split(" "); //shift remove do inicio do array  //split serve para separar e criar um array
    console.log(partes)
    if(partes[0] == partes[1]){
        break;
    }
    if(+partes[0] > +partes[1]){
        console.log('Decrescente')
    }else{
        console.log('Crescente')
    }
}

//====================================

// const n1 = +partes[0];
// const n2 = +partes[1];

// if (n1 == n2 ){
//     break;
// }
// if (n1 < n2){
//     console.log("crescente");
// }
// if(n1 > n2){
//     console.log("Decrescente");
// }
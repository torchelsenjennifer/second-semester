const input = require('fs').readFileSync("pares", "utf8")
const lines = input.split("\n")

let totalPares=0;
for(let index = 0; index <5; index++){
   if(+lines[index]%2 === 0){
    totalPares++
   } 
}

console.log(`${totalPares} valores pares`);
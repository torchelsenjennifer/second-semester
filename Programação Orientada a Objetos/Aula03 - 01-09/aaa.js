const input = require('fs').readFileSync("aaah", "utf8")
const lines = input.split("\n")

const v1 = lines.shift();
const v2 = lines.shift();
//const linha1 = lines[0];
//const linha1 = lines[1];

if(v1.length >= v2.length){
    console.log("go")
}else{
    console.log("no")
}


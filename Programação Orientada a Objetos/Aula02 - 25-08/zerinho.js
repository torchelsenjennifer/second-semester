const input = require('fs').readFileSync("zerinho", "utf8")
const lines = input.split("\n")

for (let i = 0; i < lines.length; i++) {
    if(lines[i] == "1 0 0" || lines[i] == "0 1 1"){
        console.log("A")
    }
    if(lines[i] == "0 1 0" || lines[i] == "1 0 1"){
        console.log("B")
    }
    if(lines[i] == "0 0 1" || lines[i] == "1 1 0"){
        console.log("C")
    }
    if(lines[i] == "1 1 1" || lines[i] == "0 0 0"){
        console.log("*")
    }
}
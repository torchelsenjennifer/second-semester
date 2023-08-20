const input = require('fs').readFileSync("cesar", "utf8")
const lines = input.split("\n")

const controle = +lines.shift()


for(let y = 0; y < controle; y++){
    const string = lines.shift();
    const trocaLetra = +lines.shift()
    let final = []

    for(let letra of string){
        if ((letra.charCodeAt() - trocaLetra) < 65){
            final.push(String.fromCharCode((letra.charCodeAt()- trocaLetra) + 26))
        }else{
            final.push(String.fromCharCode((letra.charCodeAt()- trocaLetra)))
        }
    }

    const resposta = final.join("")
    console.log(resposta)
}
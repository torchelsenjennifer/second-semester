
const input = require('fs').readFileSync("senha", "utf8")
// console.log("entrada :>>", input)
const lines = input.split("\n") //quebra a cada fim de linha 
// console.log("lines:>>", lines)

for (let index = 0; index <= lines.length; index++) {
    // const element = lines[index];
    const senha = '2002';
    if (+lines[index] == senha) { //+ torna ele como string pq das aspas
        console.log('Acesso Permitido')
        break;
    }else{
        console.log('Senha Invalida')
    }
}
//=====================================================================================================


while(true){
    const valor = lines.shift(); //shif vai fazendo a remoção do topo
    
    if(valor =="2002"){
        console.log("Acesso permitido")
        break;
    }else{
        console.log("Senha Invalida")

    }
}
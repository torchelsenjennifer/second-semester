
// console.log("lines:>>", lines)

const codigo = +lines[0]; //+ transforma em numero
const quantidade = +lines[1];
// console.log("code:>>", code)
// console.log("quantidade:>>", quantidade)

let total = 0;
if (codigo == 1) {
    total = quantidade * 4.00;
}
if (codigo == 2) {
    total = quantidade * 4.50;
}
if (codigo == 3) {
    total = quantidade * 5.00;
}
if (codigo == 4) {
    total = quantidade * 2.00;
}
if (codigo == 5) {
    total = quantidade * 1.50;
}
console.log("Total: R$ " + total.toFixed(2));

//=======================================================================
// versão do guty

// const [codigo, quantidade] = lines;

    switch(+lines[0]){
        case 1 :
            console.log(`Total = R$ ${(+lines[1] * 4).toFixed(2)}`)
        case 2:
            console.log(`Total = R$ ${(+lines[1] * 4.5).toFixed(2)}`)
        case 3:
            console.log(`Total = R$ ${(+lines[1] * 5).toFixed(2)}`)
        case 4:
            console.log(`Total = R$ ${(+lines[1] * 2).toFixed(2)}`)
        case 5:
            console.log(`Total = R$ ${(+lines[1] * 1.5).toFixed(2)}`)
        default:
            break;
    }
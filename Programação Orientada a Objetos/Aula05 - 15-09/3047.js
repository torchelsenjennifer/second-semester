var input = require('fs').readFileSync('entrada', '3047');
var lines = input.split('\n');

const a = +lines[1];
const b = +lines[2];

if (a>b){
    console.log(a)
}else{
    console.log(b);
}
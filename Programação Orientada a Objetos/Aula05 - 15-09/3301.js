var input = require('fs').readFileSync('3301', 'utf8');
var lines = input.split(' ');

const sobrinho = lines;

    if (sobrinho[0] < sobrinho[1] < sobrinho[2]) {
        console.log("zezinho");
    } else if (sobrinho[0] > sobrinho[1] && sobrinho[1] < sobrinho[2]) {
        console.log("luisinho");
    } else { 
        console.log("huguinho");
    }
    
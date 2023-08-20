const input = require('fs').readFileSync("tridu", "utf8")
const lines = input.split(" ")

let [a,b] = lines
a=+a
b=+b

if((a>=1 && a<=13) && (b>=1 && b<=13)){
  if(a>b){
    console.log(a)
  }else if(a<b){
    console.log(b)
  }else if(a==b){
    console.log(a)
  }
}


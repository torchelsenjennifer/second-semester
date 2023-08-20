const frm = document.querySelector("form");

const btn = document.querySelector("#botao")
const timeA = document.querySelector("#jogoA")
const timeB = document.querySelector("#jogoB")
const timeC = document.querySelector("#jogoC")
const timeD = document.querySelector("#jogoD")
const vencedorA = document.querySelector("#logoganhadorA")
const vencedorB = document.querySelector("#logoganhadorB")
const nomeA = document.querySelector("#vencedorA")
const nomeB = document.querySelector("#vencedorB")


frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(timeA.value)
    console.log(timeC.value)
   

    if(timeA.value > timeB.value){
        vencedorA.src = "imagens/flamengo.png"
    }
    if(timeA.value < timeB.value){
        vencedorA.src = "imagens/Atletico.png"
    }

    if(timeC.value > timeD.value){
        vencedorB.src = "imagens/saopaulo.png"
    } 
    
    if(timeC.value < timeD.value ){
        vencedorB.src = "imagens/gremio.png"
    }
})




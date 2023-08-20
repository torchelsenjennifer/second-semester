// cria referência aos elementos da página a serem manipulados
const outFrutas = document.querySelector("#outFrutas")

const imgMaca = document.querySelector("#imgMaca")
const imgLaranja = document.querySelector("#imgLaranja")
const imgKiwi = document.querySelector("#imgKiwi")
const imgManga = document.querySelector("#imgManga")
const imgUva = document.querySelector("#imgUva")

const divJogo = document.querySelector("#divJogo")
const divFrutas = document.querySelector("#divFrutas")

const btVerificar = document.querySelector("#btVerificar")
const btJogarNovamente = document.querySelector("#btJogarNovamente")

const outOk = document.querySelector("#outOk")
const outErro = document.querySelector("#outErro")

let numMacas;
let numLaranjas;
let numKiwis;
let numMangas;
let numUvas;

// define um evento que ocorre quando a página é carregada
window.addEventListener("load", () => {
  numMacas = Math.ceil(Math.random() * 5)
  numLaranjas = Math.ceil(Math.random() * 5)
  numKiwis = Math.ceil(Math.random() * 5)
  numMangas = Math.ceil(Math.random() * 5)
  numUvas = Math.ceil(Math.random() * 5)

  outFrutas.innerText = `Maçãs: ${numMacas}, Laranjas: ${numLaranjas}, Kiwis: ${numKiwis}, Mangas: ${numMangas} e Uvas: ${numUvas}`
})

const novaFruta = (fruta) => {
  // cria um novo elemento na página
  const figura = document.createElement("img")
  // modifica propriedades deste elemento
  figura.src = fruta + ".jpg"
  figura.alt = "Fruta: " + fruta
  // indica o local da página onde ele será renderizado (filho de quem)
  divJogo.append(figura)
}

imgMaca.addEventListener("click", () => novaFruta("maca"))
imgLaranja.addEventListener("click", () => novaFruta("laranja"))
imgKiwi.addEventListener("click", () => novaFruta("kiwi"))
imgManga.addEventListener("click", () => novaFruta("manga"))
imgUva.addEventListener("click", () => novaFruta("uva"))

btVerificar.addEventListener("click", () => {
  // cria um vetor com todas as frutas inseridas em divJogo
  const frutas = divJogo.querySelectorAll("img")

  let jogoMacas = 0
  let jogoLaranjas = 0
  let jogoKiwis = 0
  let jogoMangas = 0
  let jogoUvas = 0

  for (const fruta of frutas) {
    if (fruta.alt.includes("maca")) {
      jogoMacas++
    } else if (fruta.alt.includes("laranja")) {
      jogoLaranjas++
    } else if (fruta.alt.includes("kiwi")) {
      jogoKiwis++
    } else if (fruta.alt.includes("manga")) {
      jogoMangas++
    } else if (fruta.alt.includes("uva")) {
      jogoUvas++
    }
  }

  let misturado = true

  for(let i=0; i<frutas.length-1; i++){
    if(frutas[1].alt == frutas[i+1].alt){ //alt = texto alternativo
      misturado = false
      break
    }
  }

  if (misturado == true && 
    numMacas == jogoMacas && 
    numLaranjas == jogoLaranjas &&
      numKiwis == jogoKiwis && 
      numMangas == jogoMangas && 
      numUvas == jogoUvas) {
        outOk.className = "display-2 text-primary d-inline"
      } else {
        outErro.className = "display-4 text-danger d-inline"
      }

  btVerificar.disabled = true
  btJogarNovamente.classList.remove("d-none")//chama
  //btJogarNovamente.classList.add("d-inline")

  divFrutas.classList.add("disabled-image")
  divJogo.classList.add("disabled-image")
})

btJogarNovamente.addEventListener("click", () => {
  window.location.reload()
})

divJogo.addEventListener("click", (e) => { //remover clicando sobre a fruta
  //console.log(e.target)
  if (e.target.tagName == "IMG") {
    e.target.remove()
  }    
})
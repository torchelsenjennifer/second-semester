//cria referencia aos elementos da pagina a serem manipuladas
const outFrutas = document.querySelector("#outFrutas")

const imgMaca = document.querySelector("#imgMaca")
const imgLaranja = document.querySelector("#imgLaranja")
const imgKiwi = document.querySelector("#imgKiwi")
const imgManga = document.querySelector("#imgManga")
const imgUva = document.querySelector("#imgUva")

const divJogo = document.querySelector("#divJogo")

const btVerificar = document.querySelector("#btVerificar")
const btJogarNovamente = document.querySelector("#JogarNovamente")

const outOk = document.querySelector("#outOk")
const outErro = document.querySelector("#outErro")

let numMarcas;
let numLaranjas;
let numKiwis;
let numMangas;
let numUvas;

//define um evento que ocorre quando a pagina carrega
window.addEventListener("load", () => {
    // quando a pagina for carregada
    numMarcas = Math.ceil(Math.random() * 5);
    numLaranjas = Math.ceil(Math.random() * 5);
    numMangas = Math.ceil(Math.random() * 5);
    numKiwis = Math.ceil(Math.random() * 5);
    numUvas = Math.ceil(Math.random() * 5);

    outFrutas.innerText = `Maça: ${numMarcas}, Laranjas: ${numLaranjas}, Kiwi: ${numKiwis}, Mangas: ${numMangas}, Uvas: ${numUvas}`
    // outFrutas.Frutas.innerText ="Olá..."
})

const novaFruta = (fruta) => {
    //cria um novo elementro na página
    const figura = document.createElement("img")
    //modifica propriedade desde elemento
    figura.src = fruta + ".jpg"
    figura.alt = "Fruta: " + fruta
    //indica o local da pagina onde ele será renderizado(filho de quem)
    divJogo.append(figura)
}

imgMaca.addEventListener("click", () => novaFruta("maca"))
imgLaranja.addEventListener("click", () => novaFruta("laranja"))
imgKiwi.addEventListener("click", () => novaFruta("kiwi"))
imgManga.addEventListener("click", () => novaFruta("manga"))
imgUva.addEventListener("click", () => novaFruta("uva"))

btVerificar.addEventListener("click", () => {
    //cria um vetor com todas as frutas inseridas em divJogo
    const frutas = divJogo.querySelectorAll("img")

    let jogoMacas = 0
    let jogoLaranjas = 0
    let jogoKiwis = 0
    let jogoMangas = 0
    let jogoUvas = 0

    for (const fruta of frutas)
        if (fruta.alt.includes("maca")) {
            jogoLaranjas++
        } else if (fruta.alt.includes("laranja")) {
            jogoLaranjas++
        } else if (fruta.alt.includes("kiwi")) {
            jogoKiwis++
        } else if (fruta.alt.includes("manga")) {
            jogoMangas++
        } else if (fruta.alt.includes("uva")) {
            jogoUvas++
        }

    if (numMarcas == jogoMacas && numLaranjas == jogoLaranjas && numKiwis == jogoKiwis && numMangas == jogoMangas && numUvas == jogoUvas) {
        // alert("Parabéns")
        outOk.className = "display-2 text-primary d-inline"
    } else {
        // alert("Erro...")
        outErro.className = "display-4 text-danger d-inline"
    }

    // console.log(frutas)
    btVerificar.disabled = true
 // btJogarNovamente.className = "btn btn-success btn-lg px-3 float-star ms-3 d-inline"
    btJogarNovamente.classList.remove("d-none")
    btJogarNovamente.classList.add("d-inline")
})

btJogarNovamente.addEventListener("click", () => {
window.location.reload()

})

divJogo.addEventListener("click", (e) =>{
    // alert("oi!")
    // console.log(e.target)
    e.target.remove()
})


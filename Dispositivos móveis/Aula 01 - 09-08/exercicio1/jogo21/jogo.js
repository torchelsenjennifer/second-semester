// cria referência aos elementos da página
const btComprar = document.querySelector("#buttonComprar")
const btApostar = document.querySelector("#buttonApostar")
const spanUsuario = document.querySelector("#outUsuario")
const spanComputador = document.querySelector("#outComputador")
const cardUsuario = document.querySelector("#cardUsuario")
const cardComputador = document.querySelector("#cardComputador")
const divResultado = document.querySelector("#outResultado")

// define as variáveis do sistema
const baralho = []
const naipes = ["copas", "paus", "ouros", "espadas"]
const letras = ["A", "J", "K", "Q"]

let pontosUsuario = 0
let pontosComputador = 0

function montarBaralho() {
    for (let i = 2; i <= 10; i++) {
        for (const naipe of naipes) {
            baralho.push(`${i}_${naipe}`)
        }
    }
    for (const letra of letras) {
        for (const naipe of naipes) {
            baralho.push(`${letra}_${naipe}`)
        }
    }
    // console.log(baralho)
}

window.addEventListener("load", () => {
    montarBaralho()
})

function pontosCarta(carta) {
    // substr(): obtém uma parte da string
    // indexOf(): obtém a posição do caracter pesquisado
    const numSimbolo = carta.substr(0, carta.indexOf("_"))

    let peso
    // verifica se letras inclui o símbolo obtido
    if (letras.includes(numSimbolo)) {
        if (numSimbolo == "A") {
            peso = 11
        } else {
            peso = 10
        }
    } else {
        peso = Number(numSimbolo)
    }
    return peso
}

btComprar.addEventListener("click", () => {
    // gera uma posição aleatória que indica a carta a ser removida
    const posicao = Math.floor(Math.random() * baralho.length)

    // remove a carta do baralho e atribui à variável carta
    const carta = baralho.splice(posicao, 1).toString()

    //    console.log(carta)
    //    console.log(baralho)
    const imgCarta = document.createElement("img")
    imgCarta.src = `cartas/${carta}.png`
    imgCarta.alt = `Carta ${carta}`
    cardUsuario.append(imgCarta)

    pontosUsuario = pontosUsuario + pontosCarta(carta)
    spanUsuario.innerText = pontosUsuario

    if (pontosUsuario > 21) {
        divResultado.classList.add("alert")
        divResultado.classList.add("alert-danger")
        divResultado.innerHTML = "<h4><b>Ah... passou dos 21... Você perdeu!</b></h4>"
    }
})

btApostar.addEventListener("click", () => {
    do {
        // gera uma posição aleatória que indica a carta a ser removida
        const posicao = Math.floor(Math.random() * baralho.length)

        // remove a carta do baralho e atribui à variável carta
        const carta = baralho.splice(posicao, 1).toString()

        const imgCarta = document.createElement("img")
        imgCarta.src = `cartas/${carta}.png`
        imgCarta.alt = `Carta ${carta}`
        cardComputador.append(imgCarta)

        pontosComputador = pontosComputador + pontosCarta(carta)
        spanComputador.innerText = pontosComputador

    } while (pontosComputador < pontosUsuario)

    divResultado.classList.add("alert")

    if (pontosUsuario == pontosComputador) {
        divResultado.classList.add("alert-warning")
        divResultado.innerHTML = "<h4><b>Empate... Ninguém venceu essa!</b></h4>"
    } else if (pontosComputador > 21) {
        divResultado.classList.add("alert-primary")
        divResultado.innerHTML = "<h4><b>Aeee... Você venceu! Parabéns!</b></h4>"
    } else {
        divResultado.classList.add("alert-danger")
        divResultado.innerHTML = "<h4><b>Ah... Não foi desta vez. Você perdeu.</b></h4>"
    }
})
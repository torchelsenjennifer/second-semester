const frm = document.querySelector("form");
const cardBodyFilmes = document.querySelector("#card-body-filmes")
const spanErros = document.querySelector("#outErros")
const spanChances = document.querySelector("#chances")
const spanAcertos = document.querySelector("#acertos")

const erros = []
let chances = 8
let acertos = 0

const filmes = [
  { titulo: "Minions 2", imagem: "minions-2.jpg" },
  { titulo: "Thor", imagem: "thor.jpg" },
  { titulo: "Elvis", imagem: "elvis.jpg" },
  { titulo: "Papai é pop", imagem: "papai-pop.jpg" },
  { titulo: "Trem-bala", imagem: "trem-bala.jpg" },
];

frm.addEventListener("submit", (e) => {
  // evita o comportamento default do form (enviar dados e refresh)
  e.preventDefault();

  const titulo = frm.inTitulo.value;
  let acertou = false
  let imagem = ""

  for (const filme of filmes) {
    if (filme.titulo.toUpperCase() == titulo.toUpperCase()) {
      acertou = true
      imagem = filme.imagem
    }
  }

  if (acertou) {
    // cria uma imagem e define o atributo src para a imagem correspondente
    const imgFilme = document.createElement("img")
    imgFilme.src = imagem
    imgFilme.alt = `Filme do ${titulo}`
    cardBodyFilmes.append(imgFilme)
    acertos++
    spanAcertos.innerText = acertos
  } else {
    erros.push(titulo)
    spanErros.innerText = erros.join(", ")
  }

  chances--
  spanChances.innerText = chances

  // limpa o campo e joga o foco neste campo 
  frm.inTitulo.value = ""
  frm.inTitulo.focus()

  if (acertos == 4) {
    alert("Parabéns! Você ganhou um brinde surpresa no Cine Avenida")
  } 

  if (chances == 0 && acertos < 4) {
    alert("Ops... você perdeu")
    const titulos = filmes.map(filme => filme.titulo)
    alert(`Filmes em cartaz: ${titulos.join(", ")}`)
  }

});
const divLanches = document.querySelector(".lanches")
const spanBadge = document.querySelector("span.position-absolute")

const myModal = new bootstrap.Modal(document.getElementById('carrinhoModal')) // getElementById não precisa usar #, já configura 
const butCarrinho = document.querySelector("#btCarrinho")
const butFinalizar = document.querySelector("#btFinalizar")

const tbLanches = document.querySelector("table")

//torna global os vetores (permite acessoa a eles em todas as funções do programa)
let itemsComprados
let lanches
let total=0
const carregaLanches = async () => {

  // o servidor devolve um conjunto de informações da requisição
  const dados = await axios.get("https://edeciofernando.github.io/moveis/lanches")
  //  console.log(dados)
  //  console.log("Outra linha")

  // em .data estão os dados retornados pelo Web Service
  lanches = dados.data

  let resposta = ""

  for (const lanche of lanches) {
    resposta +=
      `
    <div class="col-6 col-sm-4 col-md-3">
      <div class="card">
      <img src="${lanche.foto}" class="card-img-top" alt="Lanche">
        <div class="card-body">
          <h5 class="card-title">${lanche.id} - ${lanche.nome}</h5>
          <p class="card-text">${lanche.ingredientes}</p>
          <p class="card-text">R$: 
${lanche.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</p>
          <button class="btn btn-primary btAdicionar">Adicionar</button>
        </div>
      </div>    
    </div>  
    `
  }

  divLanches.innerHTML = resposta

  itemsComprados = localStorage.getItem("lanches") ?
    localStorage.getItem("lanches").split(";") : []

  spanBadge.innerText = itemsComprados.length
}

window.addEventListener("load", carregaLanches)

divLanches.addEventListener("click", e => {
  if (e.target.classList.contains("btAdicionar")) {
    // "captura" o elemento pai do botão que foi clicado
    const div = e.target.parentElement
    // console.log(div)
    const tagH5 = div.querySelector("h5")

    const idNome = tagH5.innerText
    //    console.log(idNome)

    // separa a string em elementos de vetor pela ocorrência do "-"
    const partes = idNome.split("-")

    const id = partes[0]

    itemsComprados.push(id)

    spanBadge.innerText = itemsComprados.length

    localStorage.setItem("lanches", itemsComprados.join(";"))
  }
})
butCarrinho.addEventListener("click", () => {
  myModal.show()

  //percorre as linhas ja existentes da tabela para remove-lo
  // (evitam que os lanches apareçam duplicados na tabela)
  for (let i= tbLanches.rows.length-1; i>=1; i--){
    tbLanches.deleteRow(i)
  }
  for (const item of itemsComprados) {



    //faz o filtro e recupera o primeiro (elemento 0) deste filtro
    const lanche = lanches.filter(aux => aux.id == item)[0]

    //adicona uma linha na tabela
    const linha = tbLanches.insertRow(-1)

    //adiciona colunas e esta linha 
    const col1 = linha.insertCell(0)
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)
    col3.classList.add("text-end")

    col1.innerHTML = `<img src = "${lanche.foto}" alt = "Lanche" width="60">`
    col2.innerText = lanche.nome
    col3.innerText = lanche.preco.toLocaleString("pt-br", {minimumFractionDigits: 2})

    total = total + lanche.preco
  }
  const linha = tbLanches.insertRow(-1)

   //adiciona colunas e esta linha 
   const col1 = linha.insertCell(0)
   const col2 = linha.insertCell(1)
   const col3 = linha.insertCell(2)
   
   col2.classList.add("text-end")
   col3.classList.add("text-end")

   col2.innerText = "Total R$:"
   col3.innerText = total.toLocaleString("pt-br", {minimumFractionDigits: 2})

})

// calcular e exibir o total
//fechar a modal ao clicar no "finalizar compra" (via javascript)

butFinalizar.addEventListener("click", () =>{

  //oculta a modal
  myModal.hide()

  //elimina a localStorage lanches
  localStorage.removeItem("lanches")

  alert("Obrigada! Seu lanche chegará em 30 minutos")

  //vai limpar o carrinho / vetores

  carregaLanches()
})
const divServicos = document.querySelector(".servicos")
const spanBadge = document.querySelector("span.position-absolute")
const myModal = new bootstrap.Modal(document.getElementById('carrinhoModal'))
const butCalendario = document.querySelector("#btCarrinho")
const butFinalizar = document.querySelector("#btFinalizar")
const tbServicos = document.querySelector("table")
let itemsSolicitados = []
let servicos
let total = 0

//==============================================================================================================
const carregaServicos = async () => {

  const dados = await axios.get("http://127.0.0.1:3000/servicos")
  servicos = dados.data
  let resposta = ""
  for (const servico of servicos) {
    resposta +=
      `
    <div class="col-6 col-sm-4 col-md-3">
      <div class="card">
      <img src="${servico.imagem}" class="card-img-top" alt="Serviço">
        <div class="card-body">
          <h5 class="card-title">${servico.id} - ${servico.nome}</h5>
          <p class="card-text">${servico.descricao}</p>
          <p class="card-text">R$: 
          ${servico.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</p>
          <button class="btn btn-primary btSolicitar">Solicitar</button>
        </div>
      </div>    
    </div>  
    `
  }

  divServicos.innerHTML = resposta
  itemsSolicitados = localStorage.getItem("servicos") ?
    localStorage.getItem("servicos").split(";") : []
  spanBadge.innerText = itemsSolicitados.length
}

//==============================================================================================================
window.addEventListener("load", carregaServicos)


//==============================================================================================================
divServicos.addEventListener("click", e => {
  if (e.target.classList.contains("btSolicitar")) {
    const div = e.target.parentElement
    const tagH5 = div.querySelector("h5")
    const idNome = tagH5.innerText
    const partes = idNome.split("-")
    const id = partes[0]
    itemsSolicitados.push(id)
    spanBadge.innerText = itemsSolicitados.length
    localStorage.setItem("servicos", itemsSolicitados.join(";"))
  }
})

//===========================================================================================================================
butCalendario.addEventListener("click", () => {
  myModal.show()

  for (let i = tbServicos.rows.length - 1; i >= 1; i--) {
    tbServicos.deleteRow(i)
  }
  for (const item of itemsSolicitados) {
    const servico = servicos.filter(aux => aux.id == item)[0]
    const linha = tbServicos.insertRow(-1)

    const col1 = linha.insertCell(0)
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)
    col3.classList.add("text-end")

    col1.innerHTML = `<img src = "${servico.imagem}" alt = "Servico" width="60">`
    col2.innerText = servico.nome
    col3.innerText = servico.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })

    total = total + servico.preco
  }
  const linha = tbServicos.insertRow(-1)

  const col1 = linha.insertCell(0)
  const col2 = linha.insertCell(1)
  const col3 = linha.insertCell(2)

  col2.classList.add("text-end")
  col3.classList.add("text-end")

  col2.innerText = "Total R$:"
  col3.innerText = total.toLocaleString("pt-br", { minimumFractionDigits: 2 })

})

//==============================================================================================================
butFinalizar.addEventListener("click", () => {

  myModal.hide()
  localStorage.removeItem("servicos")
  total = 0
  alert("Obrigada! Seu serviços foram adicionados!")

  carregaServicos()
})
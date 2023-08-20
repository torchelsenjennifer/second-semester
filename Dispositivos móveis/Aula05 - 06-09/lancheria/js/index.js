const divLanches = document.querySelector(".lanches") //LOCAL PARA MOSTRAR OS LANCHES/ PONTO, POIS É UMA CLASSE / # É PARA ID / 
const spanNum = document.querySelector("span.position-absolute")

let listaCompras = []
let lanches

const carregaLanches = async () => {

   // retorna um conjunto de dados do servidor : status, type, data....
   const dados = await axios.get("https://edeciofernando.github.io/moveis/lanches")
   //console.log (dados)
   //EM .DATA ESTÃO OS DADOS RETORNADOS PELO WEB SERVICES
   lanches = dados.data

   let html = ""

   for (const lanche of lanches) {
      //console.log(lanche.nome)

      html += `
    <div class="col-6 col-sm-4 col-md-3">
    <div class ="card">
    <img src="${lanche.foto}" class="card-img-top" alt="Lanche">
    <div class="card-body">
    <h5 class="card-title">${lanche.id} - ${lanche.nome}</h5>
    <p class="card-text">${lanche.ingredientes}</p>
    <p class="card-text">R$ 
    ${lanche.preco.toLocaleString("pt-br", {mininumFractionDigits: 2 })}</p>
    <a href="#" class="btn btn-primary btAdicionar">Adicionar</a>
    </div>
    </div>
    </div>`
      // html += "<h2>" + lanche.nome + "</h2>"
      //console.log(html)
   }
   divLanches.innerHTML = html
   listaCompras = localStorage.getItem("carrinho") ? localStorage.getItem("carrinho").split(";") : []

   //equivale ao comando a cima
   // if(localStorage.getItem("carrinho")){
   //     listaCompras = localStorage.getItem("carrinho").split(";")
   // }else{
   //     listaCompras = []
   // }
   spanNum.innerText = listaCompras.length;
}
// CHAMA A FUNÇÃO CARREGA LANCHE
window.addEventListener("load", carregaLanches)

divLanches.addEventListener("click", e => {
   // alert("oi")

   if (e.target.classList.contains("btAdicionar")) {
      //alert("oi")
      //console.log(e.target.parentElement)
      const div = e.target.parentElement
      //CAPTURA O ELEMENTO PAI DO BOTAO QUE FOI CAPTURADO
      const tagH5 = div.querySelector("h5")

      const idNome = tagH5.innerText

      //split: divide a string em elemntos de vetor
      //[0]: para obter o primeiro elemento (id)
      //trim(): para remover os espços em branco

      const id = idNome.split("-")[0].trim()

      listaCompras.push(id)
      spanNum.innerText = listaCompras.length
      //console.log(id)
      localStorage.setItem("carrinho", listaCompras.join(";"))
   }
})

//ao clica sobre o carrinho exibir, em uma nodal, os lanches adicionados(foto,nome,valor)
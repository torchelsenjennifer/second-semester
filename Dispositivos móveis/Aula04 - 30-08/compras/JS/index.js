//cria referencia aos elementos da pagina

const frm = document.querySelector("form")
const listaCompras = document.querySelector("ul")
const botaoLimpar = document.querySelector("#btLimpar")
const botaoSalvar = document.querySelector("#btSalvar")

function novoProduto(novo){
    const html = `
    <li class = "list-group-item d-flex justify-content-between my-1">
    <span>${novo}</span>
    <i class="bi bi-trash delete"></i>
    </li>
    `
    return html
}
listaCompras.addEventListener("click",(e) =>{
    //se o item clicado a class delete
    if(e.target.classList.contains("delete")){
    //remove o "pai" deste elemento (no caso, o li)
        e.target.parentElement.remove()
    }
})

botaoSalvar.addEventListener("click", ()=>{
   // console.log(listaCompras.children)
   if(listaCompras.children.length == 0){
    alert("Não há produtos para serem salvos")
    return
   }

   const produtos = []

   for(const item of listaCompras.children){
   produtos.push(item.innerText)
   }
   localStorage.setItem("compras", produtos.join(";"))
})

//ocorre quando a página é carregada
window.addEventListener("load", () => {
    if(localStorage.getItem("compras")){
        //converte o texto em elementos de vetor a cada ocorrencia ";"
        const produtos = localStorage.getItem("compras".split(";"))
        for(const produto of produtos){
            listaCompras.innerHTML += novoProduto(produto)
        }
    }

})

// quando o formulario for enviado(enter no campo entrada)
frm.addEventListener("submit", (e) => {
    //evita (previne) a execução padrão (default) do form (que é enviar)
    e.preventDefault()
    const produto = frm.inProduto.value;

    listaCompras.innerHTML += novoProduto(produto)
    //alert(produto)

    //limpar o form
    frm.reset()
})

// limpar lista botao
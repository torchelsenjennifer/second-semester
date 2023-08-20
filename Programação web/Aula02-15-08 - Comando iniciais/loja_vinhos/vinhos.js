import { json, Router } from 'express';
const router = Router();

const produtos = [ //array
    { marca: "jotape", tipo: "tinto seco", preco: 15.90 }, //objeto
    { marca: "carta vieja", tipo: "tinto suave", preco: 39.90 },
    { marca: "Sangue de boi", tipo: "Branco suave", preco: 12.90 },
]

// define the home page route
// router.get('/', (req, res) => {
//   res.send('<h2>Cadastro de vinhos<h2>');
// });

router.get('/', (req, res) => {
    //consulta // retorna a lista de produtos cadastrados
    res.json(produtos)
});


//  router.get('/:id', (req, res) => {  
//     //consulta // retorna a lista de produtos cadastrados
//     const id = req.params.id; 
//     //obtem o parametro informdo na rota
//     if(id > produtos.length){
//         res.json({msg:"Erro ...não existe"})
//     }else{
//         res.json(produtos[id-1]);
//     }
//      });

router.delete('/:id', (req, res) => {
    //consulta // retorna a lista de produtos cadastrados
    const id = req.params.id;
    //obtem o parametro informdo na rota
    if (id > produtos.length) {
        res.json({ msg: "Erro ...não existe" })
    } else {
        res.json({ msg: `Ok! Vinho da marca ${produtos[id - 1].marca} removido com sucesso...` });
        produtos.splice(id - 1, 1)
    }
});

router.use(json()) // para que a aplicacão entenda que os dados a serem recebidos estão no formato json

router.post('/', (req, res) => { // recebe os dados a serem inseridos
    const marca = req.body.marca;
    const tipo = req.body.tipo;
    const preco = req.body.preco;
    produtos.push({ marca, tipo, preco }) //mesmo nome == produtos
    res.send("Ok! Produtos inserido com sucesso.")
});


//rota de alteração de u registro
router.put('/:id', (req, res) => {
    consulta // retorna a lista de produtos cadastrados
     //obtem o parametro informdo na rota
    const id = req.params.id;
   
    const preco =  req.body.preco

    if (id > produtos.length) {
        res.json({ msg: "Erro ...não existe" })
    } else {
        produtos[id-1].preco = preco
        res.json({msd: "OK! Preço alterado com sucesso"});
    }
});


// // define the about route
// router.get('/about', (req, res) => {
//     res.send('Sobre o cadastro de vinhos');
// })

export default router
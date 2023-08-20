import ejs from 'ejs'
import dbKnex from '../dados/db_config.js'
import puppeteer from 'puppeteer'

export const produtoIndex = async (req, res) => {
    try {
        // obtém da tabela de produtos todos os registros
        const produtos = await dbKnex.select("p.*", "m.nome as marca")
            .from("produtos as p")
            .innerJoin("marcas as m", { "p.marca_id": "m.id" })
        res.status(200).json(produtos)
    } catch (error) {
        res.status(400).json({ id: 0, msg: "Erro: " + error.message })
    }
}

//================================================================================================================
export const produtoLista = async (req, res) => {
    try {
        // obtém da tabela de produtos todos os registros
        const produtos = await dbKnex.select("p.*", "m.nome as marca")
            .from("produtos as p")
            .innerJoin("marcas as m", { "p.marca_id": "m.id" })
        //res.status(200).json(produtos)

        ejs.renderFile('views/listaProdutos.ejs', { produtos }, (err, html) => {
            if (err) {

                return res.send("Erro... não foi possivel gerar a listagem")
            }
            res.status(200).send(html)
        });
    } catch (error) {
        res.status(400).json({ id: 0, msg: "Erro:" + error.message })
    }
}

//=================================================================================================================
export const produtoPdf = async (req, res) => {

    //const browser = await puppeteer.launch({Headerss: false});
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3001/produtos/lista');

    await page.waitForNetworkIdle(0)


    const pdf = await page.pdf({
        printBackground: true,
        format: 'A4',
        margin: {
            top: '20px',
            right: '20px',
            bottom: '20px',
            left: '20px'
        }
    })

    await browser.close();

    res.contentType('apllication/pdf')
    res.setHeader('Content-Disposition', 'inline;filename=produtos.pdf')
    res.status(200).send(pdf)
}
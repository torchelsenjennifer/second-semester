
-- 01 - Criar as tabelas acima.
DROP DATABASE IF EXISTS mercado;
CREATE DATABASE IF NOT EXISTS mercado;
USE mercado;


CREATE TABLE produto
  (
     codigo     INT NOT NULL(11),
     descricao  VARCHAR(45) NOT NULL,
     qtdEstoque INT NULL,
     PRIMARY KEY(codigo)
  );

  CREATE TABLE venda
  (
     codigo   INT NOT NULL(11),
     dataVenda  VARCHAR(45) NOT NULL,
     nrNF VARCHAR(45) NULL,
     PRIMARY KEY(codigo)
  );

  CREATE TABLE IF NOT EXISTS item 
  (
   produto_codigo INT NOT NULL,
   venda_id INT NOT NULL,
   qtdVenda VARCHAR(45) NULL,
  PRIMARY KEY (produto_codigo, venda_id),
  INDEX fk_produto_has_venda_venda1_idx (venda_id ASC) VISIBLE,
  INDEX fk_produto_has_venda_produto1_idx (produto_codigo ASC) VISIBLE,
  CONSTRAINT fk_produto_has_venda_produto1
    FOREIGN KEY (produto_codigo)
    REFERENCES produto (codigo)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_produto_has_venda_venda1
    FOREIGN KEY (venda_id)
    REFERENCES venda (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
    );


-- ===================================================================================================================================

-- 02 - Cadastrar 4 produtos
    INSERT INTO produto (codigo, descricao, qtdEstoque) VALUES (1, "Feijão", 10);
    INSERT INTO produto (codigo,  descricao, qtdEstoque) VALUES (2, "Arroz", 10);
    INSERT INTO produto (codigo,  descricao, qtdEstoque) VALUES (3, "Massa", 12);
    INSERT INTO produto (codigo,  descricao, qtdEstoque) VALUES (4, "Sabonete", 5);

-- 03 - Cadastrar 3 Vendas;    
    INSERT INTO venda (codigo,  dataVenda, nrNF) VALUES (1, "2022-10-27", 11);
    INSERT INTO venda (codigo,  dataVenda, nrNF) VALUES (2, "2022-10-26", 11);
    INSERT INTO venda (codigo,  dataVenda, nrNF) VALUES (3, "2022-10-25", 11);

-- 04 - Cadastrar 4 itens;
    INSERT INTO item (produto_codigo, venda_id,  qtdVenda) VALUES (1, 1, 10);
    INSERT INTO item (produto_codigo, venda_id,  qtdVenda) VALUES (2, 2, 10);
    INSERT INTO item (produto_codigo, venda_id,  qtdVenda) VALUES (3, 3, 12);
    INSERT INTO item (produto_codigo, venda_id,  qtdVenda) VALUES (4, 1, 5);


-- 05. Listar as descrições dos produtos em ordem alfabética;
    SELECT descricao,
    FROM   produto
    ORDER  BY descricao ASC;


-- 06. Listar descricao e qtdEstoque dos produtos com qtdEstoque menor do que 5;
    SELECT * descricao, qtdEstoque
    FROM   produto
    WHERE qtdEstoque < 5;


-- 07. Alterar para "Produto esgotado" o nome de todos os produtos com qtdEstoque menor ou igual a zero;
   UPDATE produto 
   SET descricao = "Produto esgotado" 
   WHERE  qtdEstoque <= 0;


-- 08 - Listar a dataVenda e nrNF de todas as vendas em ordem decrescente de dataVenda;
    SELECT dataVenda,
            nrNF
    FROM   venda
    ORDER  BY dataVenda DESC;


-- 09 - Alterar para "2022-10-28" a dataVenda de todas a vendas;
    UPDATE venda 
    SET dataVenda = '2022-10-28'


-- 10 - Listar todos os registros da tabela item, em ordem decrescente de qtdVenda.
   SELECT produto_codigo, venda_id, qtdVenda
    FROM item
    ORDER  BY qtdVenda DESC;

    
--========================================================================
--Listar nrf, codigo do produro, descricao do produto e qtd de venda

SELECT venda.nrnf, produto.codigo, produto.descricao, item.qtdVenda FROM produto;
FROM produto
INNER JOIN item ON produto.codigo = item.produto_codigo
INNER JOIN venda ON venda.id = item.venda_id;



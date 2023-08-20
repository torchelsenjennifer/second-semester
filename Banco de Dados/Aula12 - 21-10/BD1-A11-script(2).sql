DROP DATABASE IF EXISTS aula11;
CREATE DATABASE IF NOT EXISTS aula11;
USE aula11;

CREATE TABLE cidades (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(250) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE clientes (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  cidade_id int(11) DEFAULT 15,
  PRIMARY KEY (id)
);

ALTER TABLE clientes
ADD CONSTRAINT FK_Cidade
FOREIGN KEY (cidade_id) REFERENCES cidades(id) ON DELETE SET NULL ON UPDATE CASCADE;



-- 

CREATE TABLE cli (
  codigo INT(11) AUTO_INCREMENT,
  nome CHAR(30),
  PRIMARY KEY (codigo)
);

CREATE TABLE pedido (
  nr INT(11),
  cliente INT(11),
  valor FLOAT(5,2),
  PRIMARY KEY (nr)
);

INSERT INTO cli (nome) VALUES("José");
INSERT INTO cli (nome) VALUES("Elísio");
INSERT INTO cli (nome) VALUES("Roberto");
INSERT INTO cli (nome) VALUES("Guilherme");

INSERT INTO pedido (nr, cliente, valor) VALUES(1, 2, 100.50);
INSERT INTO pedido (nr, cliente, valor) VALUES(2, 2, 120.00);
INSERT INTO pedido (nr, cliente, valor) VALUES(3, 1, 20.00);
INSERT INTO pedido (nr, cliente, valor) VALUES(4, 3, 60.00);
INSERT INTO pedido (nr, cliente, valor) VALUES(5, 3, 110.00);


SELECT pedido.nr, cli.nome, pedido.valor
FROM cli
INNER JOIN pedido ON (cli.codigo = pedido.cliente);


SELECT cli.nome, pedido.valor
FROM cli
INNER JOIN pedido ON (cli.codigo = pedido.cliente)
WHERE nome LIKE "_o%";

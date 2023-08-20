SHOW   DATABASES;
DROP   DATABASE IF EXISTS aula14;
CREATE DATABASE IF NOT EXISTS aula14;
USE aula14;

-- 2) Criar um script para gerar a tabela veiculo, no formato e com as informações a seguir
CREATE TABLE veiculo(
  cor VARCHAR(15), 
  ano VARCHAR(4), 
  fabricante VARCHAR(20), 
  mod_ VARCHAR(20), 
  valordecusto DECIMAL(9, 2)
);

DESC veiculo;

INSERT INTO veiculo 
VALUES ("Prata", "1998", "Porshe", "Boxter", 17992.54);

INSERT INTO veiculo 
VALUES (NULL, "2000", "Jaguar", "XJ", 15995.00);

INSERT INTO veiculo 
VALUES ("Vermelho", "2002", "Cadillac", "Escalade", 40215.90);

SELECT * FROM veiculo;

/* 3) A tabela possui um planejamento pouco eficaz, pois possui várias falhas. 
Utilizando o comando ALTER TABLE gere o script para a modificação da tabela acima 
para que no formato da tabela a seguir */
ALTER TABLE veiculo 
ADD COLUMN    id          INT(11)     FIRST, 
ADD COLUMN    chassi      VARCHAR(30) AFTER id, 
MODIFY COLUMN fabricante  VARCHAR(20) AFTER chassi, 
CHANGE COLUMN mod_ modelo VARCHAR(20) AFTER fabricante, 
MODIFY COLUMN cor         VARCHAR(15) AFTER modelo, 
MODIFY COLUMN ano         VARCHAR(4)  AFTER cor, 
CHANGE COLUMN valordecusto valor DECIMAL(9, 2);

DESC veiculo;

SELECT * FROM veiculo;

UPDATE veiculo 
SET 
  id = 1, 
  chassi = "RNKLK66N33G213481" 
WHERE modelo = "Boxter";

UPDATE veiculo 
SET 
  id = 2, 
  chassi = "SAEDA44B175B04113" 
WHERE modelo = "XJ";

UPDATE veiculo 
SET 
  id = 3, 
  chassi = "3GYEK63NT2G280668" 
WHERE modelo = "Escalade";

SELECT * FROM veiculo;

ALTER TABLE veiculo 
MODIFY COLUMN id INT(11) AUTO_INCREMENT PRIMARY KEY;

-- 4) Alterar a coluna fabricante para que tenha o tipo VARCHAR(50) e fique em último lugar na tabela;
ALTER TABLE veiculo 
MODIFY COLUMN fabricante VARCHAR(50) AFTER valor;

-- 5) Criar uma tabela dono, que representará os donos dos veículos. Nesta tabela inclua os campos cpf, nome, telefone, cidade.
CREATE TABLE dono(
  cpf      VARCHAR(11), 
  nome     VARCHAR(45), 
  telefone VARCHAR(20), 
  cidade   VARCHAR(45)
);

SHOW TABLES;

DESC dono;

-- 6) Insira 3 donos de veículos preenchendo todas as informações da tabela dono;
INSERT INTO dono 
VALUES ("42872865438", "Lucinda PLeiades", "11987721233", "Baurú");

INSERT INTO dono 
VALUES ("32912865454", "Ortega Batavo", "53987721264", "Pelotas");

INSERT INTO dono 
VALUES("88862865476", "Plinio Souza", "88987721246", "Camaquã");

/* 7) Adicione outra coluna na tabela dono com o nome id_dono para que fique na esquerda da tabela, 
antes de todas as colunas, e fique com a propriedade AUTO_INCREMENT e PRIMARY KEY definidas. */
ALTER TABLE dono 
ADD COLUMN  dono_id INT AUTO_INCREMENT PRIMARY KEY FIRST;

DESC dono;

SELECT * FROM dono;

-- 8) Altere o nome da tabela dono para pessoa;
ALTER TABLE dono 
RENAME TO pessoa;

-- 9) Elimine todos os registros da tabela pessoa;
DELETE FROM pessoa;
-- Elimina os registros mas mantém a memória do auto_incremento

SELECT * FROM pessoa;

/* 10) Insira novamente os registros que foram excluídos na tabela pessoa 
(copie novamente o seu script no console);*/
INSERT INTO pessoa(cpf, nome, telefone, cidade) 
VALUES("42872865438", "Lucinda PLeiades", "11987721233", "Baurú");

INSERT INTO pessoa(cpf, nome, telefone, cidade) 
VALUES("32912865454", "Ortega Batavo", "53987721264", "Pelotas");

INSERT INTO pessoa(cpf, nome, telefone, cidade) 
VALUES("88862865476", "Plinio Souza", "88987721246", "Camaquã");

SELECT * FROM pessoa;
-- Observe os IDs

-- Bonus)
TRUNCATE pessoa;
-- Elimina os registros e reinicializa o auto_incremento

SELECT * 
FROM pessoa;
INSERT INTO pessoa(cpf, nome, telefone, cidade) 
VALUES("42872865438", "Lucinda PLeiades", "11987721233", "Baurú");

INSERT INTO pessoa(cpf, nome, telefone, cidade) 
VALUES("32912865454", "Ortega Batavo", "53987721264", "Pelotas");

INSERT INTO pessoa(cpf, nome, telefone, cidade) 
VALUES("88862865476", "Plinio Souza", "88987721246", "Camaquã");

SELECT * FROM pessoa;

/* 11) Adicione uma nova coluna na tabela pessoa com o nome id_veiculo, 
e insira 3 novos registros completos de donos com ID’s de VEICULOS. */
ALTER TABLE pessoa 
ADD COLUMN  id_veiculo INT;

DESC pessoa;

SELECT * FROM pessoa;

INSERT INTO pessoa(cpf, nome, telefone, cidade, id_veiculo) 
VALUES("45861165421", "Tamara Dutra", "53982921218", "Cristal", 3);

INSERT INTO pessoa(cpf, nome, telefone, cidade, id_veiculo) 
VALUES("68861265432", "Pandemonia Alberta", "11984321521", "Cuiabá", 1);

INSERT INTO pessoa(cpf, nome, telefone, cidade, id_veiculo) 
VALUES("90861865477", "Joselangelo Paz", "51988921290", "Chuy", 2);

SELECT * FROM pessoa;

-- FIM :)
DROP DATABASE IF EXISTS av2m;
CREATE DATABASE IF NOT EXISTS av2m;
USE av2m;

CREATE TABLE uf (
 id    INT AUTO_INCREMENT,
 sigla CHAR(2) NOT NULL,
 PRIMARY KEY (id)
);

CREATE TABLE cidade (
 id      INT AUTO_INCREMENT,
 uf_id   INT NOT NULL,
 nome    VARCHAR(45) NOT NULL,
 capital BOOLEAN,
 PRIMARY KEY (id),
 FOREIGN KEY (uf_id) REFERENCES uf(id)
);

CREATE TABLE atleta (
 id         INT AUTO_INCREMENT,
 cidade_id  INT NOT NULL,
 apelido    VARCHAR(45) NOT NULL,
 altura     DECIMAL(10,2),
 peso       DECIMAL(10,2),
 PRIMARY KEY (id),
 FOREIGN KEY (cidade_id) REFERENCES cidade (id)
);

-- 1 - Gere os scripts para inserir no banco os dados a seguir:
--Inserir
INSERT INTO uf (id, sigla) VALUES (NULL, RS);
INSERT INTO uf (id, sigla) VALUES (NULL, SP);
INSERT INTO uf (id, sigla) VALUES (NULL, RJ);
INSERT INTO uf (id, sigla) VALUES (NULL, MG);

-- Inserir 
INSERT INTO uf (id, uf_id, nome, capital) VALUES (1, 1, Porto Alegre, 1);
INSERT INTO uf (id, uf_id, nome, capital) VALUES (2, 1, Pelotas, 0);
INSERT INTO uf (id, uf_id, nome, capital) VALUES (3, 4, Belo Horizonte, 1);
INSERT INTO uf (id, uf_id, nome, capital) VALUES (4, 3, Rio de Janeiro, 1);
INSERT INTO uf (id, uf_id, nome, capital) VALUES (5, 2, Sao Paulo, 1);
INSERT INTO uf (id, uf_id, nome, capital) VALUES (6, 2, Campinas, 0);

--Inserir
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 2, "Deusarina Venus de Milo", 1.80, 90.56);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 4, "Maxwelbe Texugo Berta", 2.25, 100.38);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 3, "Naida Navinda Navolta Pereira", 2.05, 111.49);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 1, "Dolores Fuertes de Barriga", 1.60, 78.00);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 3, "Primorosa Santos", 1.75, 68.00);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 6, "Berta Rachou", 1.78, 80.00);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 2, "Hypotenusa Pereira", 1.90, 80.00);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 5, "Maria Voce Me Mata", 1.80, 80.00);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 1, "Alucinetica Honorata", 1.80, 80.00);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 4, "Cibalena Dorilina Alfajor", 1.80, 80.00);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 3, "Frankstefferson", 1.80, 80.00);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 4, "Hericlapiton da Silva", 2.03, 99.28);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 3, "Ulisflavio Valdisnei", 1.79, 88.78);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 6, "Free William da Silva", 2.00, 95.00);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 1, "Acafrao Fagundes", 1.68, 88.99);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 2, "Mangelstron Duracel", 1.70, 79.00);
INSERT INTO uf (id, cidade_id, apelido, altura, peso) VALUES (1, 1, "Rotsenaidil Silva", 1.75, 78.08);



--2 - Elabore uma consulta que exiba o apelido dos atletas em ordem alfabética decrescente.

SELECT apelido      
FROM   atleta
ORDER  BY atleta.nome DESC;

--3 - Elabore uma consulta que retorne a sigla da UF ao lado do nome da cidade. A listagem deve ser em ordem alfabética UF seguida de nome de cidade. (veja exemplo)

SELECT uf.sigla, cidade.nome FROM uf
INNER JOIN cidade on cidade.uf_id = uf.id
ORDER BY uf.sigla;

--4 - Escreva uma consulta que traga o somatório (peso total) dos atletas.

SELECT SUM(atleta.peso) AS Peso,
FROM   atleta;

--5 - Elabore uma consulta que retorne a sigla da UF, ao lado do nome da cidade, e apelido de cada atleta. A listagem deve ser em ordem alfabética de UF seguida de nome de cidade e Apelido.

SELECT uf.sigla, cidade.nome, atleta.apelido FROM uf
INNER JOIN cidade on cidade.uf_id = uf.id
INNER JOIN atleta on atleta.cidade_id = uf.id
ORDER BY uf.sigla ASC;

--6 - Escreva uma consulta que retorne o nome da cidade ao lado da quantidade de atletas desta cidade. Os dados devem ser agrupados por cidade e em ordem alfabética de cidade.

SELECT SUM(atleta.nome), cidade.nome FROM cidade
INNER JOIN cidade on cidade.uf_id = uf.id
INNER JOIN atleta on atleta.cidade_id = uf.id
GROUP  BY cidade.nome ASC

--7 - Usando (LIMIT 1 ou IN) escreva uma consulta que retorne o apelido, a altura e o peso do atleta mais alto.
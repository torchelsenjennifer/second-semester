-- 1) Adaptar as seguintes alterações no script de criação do banco de dados utilizado no banco cinema:
-----a. Criar a tabela usuario, contendo os campos id, nome, email, cidade_id
DROP TABLE IF EXISTS usuario;
CREATE TABLE IF NOT EXISTS usuario (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  cidade_id INT(11) NOT NULL,
  PRIMARY KEY (id));

----b. Criar a tabela venda (com os campos data, hora e valorIngresso), relacionar esta tabela com a
----tabela sessao. Em seguida criar um relacionamento entre as tabelas usuario e venda
DROP TABLE IF EXISTS venda; 
CREATE TABLE IF NOT EXISTS venda ( --cria a tabela venda
  data DATE NOT NULL, --campo
  hora TIME NOT NULL, --campo
  valorIngresso DECIMAL(10,2) NOT NULL, --campo
  sessao_id INT(11)  NOT NULL, -- adiciona outro campo
  ADD CONSTRAINT fk_venda_sessao --nome do relacionamento entre venda e sessao, precisão
  FOREIGN KEY (sessao_id) REFERENCES sessao (id)); -- adiciona como chave estrageira o campo sessao id e relaciona com a tabela sessao o campo id

ALTER TABLE venda
ADD COLUMN usuario_id INT(11);  --Adicona uma nova coluna chamada usuario_id dentro da tabela venda

ALTER TABLE venda
ADD CONSTRAINT fk_venda_usuario ---nome do relacionamento entre venda e usuario, precisão
FOREIGN KEY (usuario_id) REFERENCES usuario (id);-- adiciona como chave estrageira o campo usuario_id e relaciona com a tabela usuario o campo id

--c. Criar INSERT’s de dados necessários a fim de cadastrar 10 usuários, e seguida cadastrar 50 vendas
--de ingressos;

INSERT INTO usuario (nome, email, cidade_id) VALUES ("Roger", "roger@gmail.com", 1);
INSERT INTO usuario (nome, email, cidade_id) VALUES ("Pedro", "pedro@gmail.com", 2);
INSERT INTO usuario (nome, email, cidade_id) VALUES ("Henrique", "henrique@gmail.com", 3);
INSERT INTO usuario (nome, email, cidade_id) VALUES ("Picanco", "picanco@gmail.com", 1);
INSERT INTO usuario (nome, email, cidade_id) VALUES ("Kalebe", "kalebe@gmail.com", 2);
INSERT INTO usuario (nome, email, cidade_id) VALUES ("Jennifer", "jennnifer@gmail.com", 3);
INSERT INTO usuario (nome, email, cidade_id) VALUES ("Rafaela", "rafaela@gmail.com", 4);
INSERT INTO usuario (nome, email, cidade_id) VALUES ("Arthur Morgan","arthur@gmail.com", 5);
INSERT INTO usuario (nome, email, cidade_id) VALUES ("Cleiton Bom de Guerra","cleiton@gmail.com", 4);
INSERT INTO usuario (nome, email, cidade_id) VALUES ("Caio", "caio@gmail.com", 5)


INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 1, 1);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 1, 2);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 1, 3);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 1, 4);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 1, 5);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 1, 6);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 1, 7);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 1, 8);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 1, 9);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 1, 10);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 2, 1);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 2, 2);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 2, 3);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 2, 4);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 2, 5);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 2, 6);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 2, 7);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 2, 8);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 2, 9);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 2, 10);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 3, 1);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 3, 2);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 3, 3);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 3, 4);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 3, 5);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 3, 6);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 3, 7);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 3, 8);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 3, 9);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 3, 10);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 1);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 2);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 3);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 4);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 5);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 6);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 7);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 8);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 9);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 10);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 1);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 2);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 3);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 4);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 5);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 6);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 7);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 8);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 9);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 4, 10);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 5, 1);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 5, 2);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 5, 3);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 5, 4);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 5, 5);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 5, 6);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 5, 7);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 5, 8);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 5, 9);
INSERT INTO venda (data, hora, valorIngresso, sessao_id, usuario_id) VALUES ('2022-11-18','16:20:00', 12.5, 5, 10);

--2) 
-- A) Crie uma consulta que liste todos os nomes dos filmes, gêneros e duração, ordenados por gênero e em seguida em ordem decrescente de tituloOriginal de
--Filme;

select filme.tituloOriginal, filme.tituloPortugues, filme.duracao, genero.nome as genero
from filme
inner join genero_filme on filme.id = genero_filme.filme_id
inner join genero on genero_filme.genero_id = genero.id
ORDER  BY  genero asc,
		   filme.tituloOriginal desc;

-- B) Selecionar os títulos dos filmes em ordem inversa de título;

SELECT filme.tituloOriginal, filme.tituloPortugues     
FROM   filme
ORDER  BY filme.tituloOriginal DESC;

--C) Utilizando o operador IN, crie uma consulta para que liste o nome de todos os gêneros menos os gêneros de suspense, terror e comédia;
SELECT genero.nome FROM genero
WHERE genero.nome IN ("Aventura","Comédia","Ficção","Faroeste", "Ação");

--d. Utilizando subconsultas, crie uma consulta que retorne os títulos, gênero e duração de filmes em que ogênero seja SUSPENSE e a duração es teja entre 70 e 130 minutos;

SELECT filme.tituloOriginal,genero.nome,filme.duracao
FROM filme
INNER JOIN genero_filme ON genero_filme.filme_id = filme.id
INNER JOIN genero ON genero.id = genero_filme.genero_id
WHERE filme.duracao BETWEEN 70 AND 130 AND genero.nome IN ("SUSPENSE");	

--e. Criar uma consulta para listar os títulos em original e português dos filmes que ainda não possuem ingressos vendidos;

select tituloOriginal, tituloPortugues from filme
where id NOT IN (select filme_id from venda
INNER JOIN sessao on sessao.id = venda.sessao_id
group by filme_id);

--f Criar uma consulta para contabilizar o total dos valores de ingressos vendidos por filme, liste o nome do filme e a quantidade de ingressos;

select sum(valorIngresso) as totalVendidoPorFilme, count(valorIngresso) as totalIngressosPorFilme, filme_id, filme.tituloPortugues as nomeDoFilme
from venda
INNER JOIN sessao on sessao.id = venda.sessao_id
INNER JOIN filme on filme.id = sessao.filme_id
group by filme_id;

--g. Criar uma consulta que contabilize quantos ingressos foram vendidos por filme, liste o nome do filme e a quantidade, liste apenas os 5 primeiros caracteres do nome do filme e a quantidade de ingressos;

select count(valorIngresso) as totalIngressosPorFilme, filme_id, LEFT(filme.tituloPortugues, 5) as nomeDoFilme
from venda
INNER JOIN sessao on sessao.id = venda.sessao_id
INNER JOIN filme on filme.id = sessao.filme_id
group by filme_id;


--h. Criar uma consulta que liste todos os nomes dos cinemas e a quantidade de caracteres de cada nome de cinema

select nomeFantasia, LENGTH(nomeFantasia)
from cinema;

--i. Modificar a consulta anterior para que liste apenas os 5 primeiros caracteres do nome do cinema listado;

select nomeFantasia, LEFT(nomeFantasia, 5)
from cinema;

--j. Criar uma consulta para listar a quantidade de atores que trabalharam em cada filme. Listar o nome do filme e a quantidade de atores

select  filme.tituloPortugues, count(elenco.ator_id) as totalAtores
from filme
INNER JOIN elenco on filme_id = filme.id
group by filme.tituloPortugues;

-- k. Crie uma consulta para atualizar o tempo para + 44 minutos em todos os filmes de suspense

update filme
    set duracao = (44 + duracao)
    where 
			id IN(SELECT f.id
			FROM filme as f
			INNER JOIN genero_filme ON genero_filme.filme_id = f.id
			INNER JOIN genero ON genero.id = genero_filme.genero_id
			WHERE genero.nome IN ("Suspense") );


-- l. Utilizando o IN, crie uma consulta que selecione o nome dos atores que não participaram de nenhum filme;

SELECT  a.nome AS Ator, elenco.filme_id
FROM    ator AS a
        LEFT JOIN   elenco   ON a.id = elenco.ator_id
WHERE   elenco.filme_id IS NULL;

-- m. Utilizando o IN crie uma consulta que retorne o título e o gênero de todos os filmes que não passaram ainda em cinema algum;

SELECT  filme.tituloOriginal, genero.nome
FROM    filme, genero
        LEFT JOIN sessao          ON filme.id = sessao.filme_id;
        INNER JOIN genero_filme   ON filme.id = genero_filme.genero_id
        INNER JOIN genero         ON genero_filme.genero_id = genero.id;






  


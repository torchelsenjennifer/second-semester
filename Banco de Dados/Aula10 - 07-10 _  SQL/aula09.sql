mysql -u root -p

SHOW DATABASES; 
DROP DATABASE IF EXISTS manha;
CREATE DATABASE manha;
USE DATABASE manha;
USE manha;

CREATE TABLE teste(
    codigo INT(11),
    nome CHAR(15),
    email VARCHAR(25)
);

SHOW TABLES; 
DESC teste;  

DROP DATABASE IF EXISTS aula09;
CREATE DATABASE IF NOT EXISTS aula09;
USE aula09;  

CREATE TABLE teste2(
    codigo  INTEGER AUTO_INCREMENT NOT NULL,
    nome    VARCHAR(195) NOT NULL,
    email   VARCHAR(200),
    telefone CHAR(15),
    PRIMARY KEY(codigo)
);

use aula09;

CREATE TABLE departamneto (
    codigo INT(11) NOT NULL,
    nome VARCHAR(15) NOT NULL,
    PRIMARY KEY(codigo),
    UNIQUE (nome)
);

CREATE TABLE empregado(
    matricula CHAR(9) NOT NULL,
    nome VARCHAR(15) NOT NULL,
    dataNasc DATE,
    endereco VARCHAR(30),
    sexo  CHAR(1),
    salario DECIMAL(10,2)
    codDep INT(11) NOT NULL,
    PRIMARY KEY (matricula)
    FOREIGN KEY (codDep) REFERENCES departamneto(codigo)
);

CREATE TABLE cliente(
    codigo CHAR(6),
    nome VARCHAR(20),
    dataN DATE,
    valor DECIMAL(10,2),
    PRIMARY KEY(codigo)
);

INSERT INFO clientes (codigo, nome, dataN, valor, cidade) VALUES ('B5200X', 'Bartolomeu','1982-12-23', 100.4, 'Pelotas');
INSERT INFO clientes (codigo, nome, dataN, valor, cidade) VALUES ('A73111', 'Orpiliano','2001-07-19', 98.6, 'Canoas');
INSERT INFO clientes (codigo, nome, dataN, valor, cidade) VALUES ('B5200X', 'Bartolomeu','1999-11-21', 1219.48, 'Pelotas');
INSERT INFO clientes (codigo, nome, dataN, valor, cidade) VALUES ('B5200X', 'Luz Artemina','1969-01-24', 31.29, 'Erechim');
INSERT INFO clientes VALUES ('B5200X', 'Bartolomeu','1982-12-23', 100.4, 'Pelotas');
INSERT INFO clientes (codigo, nome) VALUES ('S9983W', 'Sarafina');
-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE firefly;

USE firefly;

SHOW TABLES;
DESC personagem;

CREATE TABLE personagem (
	idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	acertos INT,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

INSERT INTO personagem VALUES
(1, 'Ellie Williams'),
(2, 'Joel Miller'),
(3, 'Abby Anderson'),
(4, 'Tess Servopoulos'),
(5, 'Riley Abel'),
(6, 'Tommy Miler');

select * from quiz;

select count(fk_usuario) as contagem, idQuiz from quiz join usuario on id = fk_usuario where id = 3 group by idQuiz;

select quiz.acertos as acertos, usuario.nome as nome from quiz join usuario on id = quiz.fk_usuario;

insert into quiz (acertos, fk_usuario) values (3, 2);
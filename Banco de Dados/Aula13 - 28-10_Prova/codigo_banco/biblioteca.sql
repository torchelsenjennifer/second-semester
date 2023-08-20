-- CREATE TABLE IF NOT EXISTS `biblioteca`.`usuario` (
--   `codigo` INT NOT NULL,
--   `nome` VARCHAR(45) NOT NULL,
--   `endereco` VARCHAR(45) NULL,
--   PRIMARY KEY (`codigo`))
-- ENGINE = InnoDB;

-- CREATE TABLE IF NOT EXISTS `biblioteca`.`usuario` (
--   `codigo` INT NOT NULL,
--   `nome` VARCHAR(45) NOT NULL,
--   `endereco` VARCHAR(45) NULL,
--   PRIMARY KEY (`codigo`))
-- ENGINE = InnoDB;

-- INSERT INTO `biblioteca`.`usuario` (`codigo`, `nome`, `endereco`) VALUES (NULL, NULL, NULL);

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema biblioteca
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema biblioteca
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8 ;
USE `biblioteca` ;

-- -----------------------------------------------------
-- Table `biblioteca`.`area`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`area` (
  `codigo` INT NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`titulo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`titulo` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `qtdExemplares` VARCHAR(45) NOT NULL,
  `area_codigo` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_titulo_area1_idx` (`area_codigo` ASC) VISIBLE,
  CONSTRAINT `fk_titulo_area1`
    FOREIGN KEY (`area_codigo`)
    REFERENCES `biblioteca`.`area` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`autor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`autor` (
  `codigo` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`editora`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`editora` (
  `codigo` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NULL,
  `endereco` VARCHAR(45) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`titulo_has_autor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`titulo_has_autor` (
  `titulo_id` INT NOT NULL,
  `autor_codigo` INT NOT NULL,
  PRIMARY KEY (`titulo_id`, `autor_codigo`),
  INDEX `fk_titulo_has_autor_autor1_idx` (`autor_codigo` ASC) VISIBLE,
  INDEX `fk_titulo_has_autor_titulo_idx` (`titulo_id` ASC) VISIBLE,
  CONSTRAINT `fk_titulo_has_autor_titulo`
    FOREIGN KEY (`titulo_id`)
    REFERENCES `biblioteca`.`titulo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_titulo_has_autor_autor1`
    FOREIGN KEY (`autor_codigo`)
    REFERENCES `biblioteca`.`autor` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`titulo_has_editora`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`titulo_has_editora` (
  `titulo_id` INT NOT NULL,
  `editora_codigo` INT NOT NULL,
  PRIMARY KEY (`titulo_id`, `editora_codigo`),
  INDEX `fk_titulo_has_editora_editora1_idx` (`editora_codigo` ASC) VISIBLE,
  INDEX `fk_titulo_has_editora_titulo1_idx` (`titulo_id` ASC) VISIBLE,
  CONSTRAINT `fk_titulo_has_editora_titulo1`
    FOREIGN KEY (`titulo_id`)
    REFERENCES `biblioteca`.`titulo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_titulo_has_editora_editora1`
    FOREIGN KEY (`editora_codigo`)
    REFERENCES `biblioteca`.`editora` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`usuario` (
  `codigo` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(45) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`emprestimo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`emprestimo` (
  `titulo_id` INT NOT NULL,
  `usuario_codigo` INT NOT NULL,
  PRIMARY KEY (`titulo_id`, `usuario_codigo`),
  INDEX `fk_titulo_has_usuario_usuario1_idx` (`usuario_codigo` ASC) VISIBLE,
  INDEX `fk_titulo_has_usuario_titulo1_idx` (`titulo_id` ASC) VISIBLE,
  CONSTRAINT `fk_titulo_has_usuario_titulo1`
    FOREIGN KEY (`titulo_id`)
    REFERENCES `biblioteca`.`titulo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_titulo_has_usuario_usuario1`
    FOREIGN KEY (`usuario_codigo`)
    REFERENCES `biblioteca`.`usuario` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `biblioteca`.`usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `biblioteca`;
INSERT INTO `biblioteca`.`usuario` (`codigo`, `nome`, `endereco`) VALUES (1, 'Juan', 'Donja');
INSERT INTO `biblioteca`.`usuario` (`codigo`, `nome`, `endereco`) VALUES (2, 'Lobato', 'Laranjal');

COMMIT;


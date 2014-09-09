SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `music_share` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `music_share` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `music_share`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `user_name` VARCHAR(45) NOT NULL ,
  `sex` INT NOT NULL ,
  `password` VARCHAR(45) NOT NULL ,
  `self_introduction` VARCHAR(255) NULL ,
  `avatar` VARCHAR(45) NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`music`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `music_share`.`music` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NOT NULL ,
  `duration` INT NOT NULL ,
  `type` VARCHAR(45) NOT NULL ,
  `path` VARCHAR(45) NOT NULL ,
  `user_id` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `UM_FK_idx` (`user_id` ASC) ,
  CONSTRAINT `UM_FK`
    FOREIGN KEY (`user_id` )
    REFERENCES `mydb`.`user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comment`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `music_share`.`comment` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `time` VARCHAR(45) NOT NULL ,
  `content` VARCHAR(255) NOT NULL ,
  `user_id` INT NOT NULL ,
  `music_id` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `CU_KF_idx` (`user_id` ASC) ,
  INDEX `CM_idx` (`music_id` ASC) ,
  CONSTRAINT `CU_KF`
    FOREIGN KEY (`user_id` )
    REFERENCES `mydb`.`user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `CM`
    FOREIGN KEY (`music_id` )
    REFERENCES `mydb`.`music` (`user_id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

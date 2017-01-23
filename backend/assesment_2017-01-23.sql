# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.54-0ubuntu0.14.04.1)
# Database: assesment
# Generation Time: 2017-01-23 08:54:56 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `question5` varchar(255) DEFAULT NULL,
  `question6` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `name`, `email`, `question5`, `question6`)
VALUES
	(1,'TEST','test','1','1'),
	(2,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(3,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(4,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(5,'w','w','w','w'),
	(6,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(7,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(8,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(9,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(10,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(11,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(12,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(13,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(14,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(15,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(16,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(17,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(18,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(19,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(20,'Tim Test','timroosen@gmail.com','Antwoord 1','Antwoord 2'),
	(21,'wer','wer','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. '),
	(22,'wer','wer','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. '),
	(23,'wer','wer','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. '),
	(24,'r','r','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. '),
	(25,'r','r','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. '),
	(26,'sdf','sdf','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. '),
	(27,'r','r','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. '),
	(28,'wer','wer','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. '),
	(29,'ewre','wer','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. '),
	(30,'wer','wer','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. '),
	(31,'qwe','qwe','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. '),
	(32,'wer','wer','Maakt mij niet uit, wat ik op Google vind ','Hoe om te gaan met mijn ziekte/beperking in het dagelijks leven. ');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

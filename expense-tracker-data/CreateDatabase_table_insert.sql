CREATE DATABASE `expense_tracker_db`;

use `expense_tracker_db` ;


CREATE TABLE `expenses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `amount` float(40,2) NOT NULL,
  `category` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

select * from expenses;

INSERT INTO `expenses` (`id`,`name`,`amount`,`category`,`description`) VALUES (1,'breakfast',10.15,'Food','1st meal');
INSERT INTO `expenses` (`id`,`name`,`amount`,`category`,`description`) VALUES (2,'lunch',14.50,'Food','2nd meal');
INSERT INTO `expenses` (`id`,`name`,`amount`,`category`,`description`) VALUES (3,'dinner',20.99,'Food','3rd meal');
INSERT INTO `expenses` (`id`,`name`,`amount`,`category`,`description`) VALUES (4,'blouse',30.00,'Clothing','retail therapy');
INSERT INTO`expenses` (`id`,`name`,`amount`,`category`,`description`) VALUES (5,'gas',14.50,'transportation','out of gas');
INSERT INTO `expenses` (`id`,`name`,`amount`,`category`,`description`) VALUES (6,'pens',14.50,'office supplies','need to write');
INSERT INTO `expenses` (`id`,`name`,`amount`,`category`,`description`) VALUES (7,'stapler',4.50,'office supplies','prvious stapler broke');

select * from expenses;



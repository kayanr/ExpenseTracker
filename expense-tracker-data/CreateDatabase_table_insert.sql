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


INSERT INTO `expenses` (`id`,`name`,`amount`,`category`,`description`) VALUES 
(1,'Dinner', 53.97,'Food','dinner at Cheesecake Factory'),
(2,'Fare', 2.75,'Transportation','Subway Fare'),
(3,'Fare', 2.75,'Transportation','Subway Fare'),
(4,'Lodging', 280.00,'Travel','Lodging for weekend'),
(5,'Lunch', 6.59,'Transportation','Lunch at deli');


select * from expenses;



-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: post_app_db
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'created at time',
  `title` varchar(255) DEFAULT NULL COMMENT 'title',
  `body` varchar(255) DEFAULT NULL COMMENT 'content',
  `time` varchar(255) DEFAULT NULL COMMENT 'time',
  `location` varchar(255) DEFAULT NULL COMMENT 'location',
  `image` longtext COMMENT 'image url',
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'user id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb3 COMMENT='newTable';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO 
`posts` (
id,
created_at,
title,
body,
time,
location,
image,
uid
)
VALUES 
(1,'2022-04-28 13:49:29',
'Delicious salad bar',
'Who says take away needs to be unhealthy? delicious salad bars, with healthy, experimental and filling salads, so you can quench your hunger with a clear conscience … But that requires you to break your agreement with the rabbits!',
'Pickup time: 17:00',
'Rosenkrantzgade 23, 8000 Aarhus',
'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 ',
'1'),
(2,'2022-04-28 13:49:29',
'Pastry mystery bag',
'Fight food waste by ordering a mystery bag from Starbucks. The contents of the bag varies for day to day, but we guarantee your satisfaction. ',
'Pickup time: 17:00',
'Store Torv 18 Borgporten, 8000 Aarhus ',
'https://images.pexels.com/photos/6152263/pexels-photo-6152263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'2'),
(3,'2022-04-28 13:49:29', 
'Cheap pasteries',
'Kohberg is a partner when Netto from 2014 will sell freshly baked breakfast bread and cakes in the chains 400 stores across the country. Secure your mystery bag filled with pastries.',
'Pickup time: 17:00',
'Sankt Knuds Torv 2, 8000 Aarhus ',
'https://images.pexels.com/photos/2026371/pexels-photo-2026371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'3'),
(4,'2022-04-28 13:49:29',
'Groceries mystery bag',
'Today, Kvickly has a small 80 stores around Denmark. Here there are always good offers and good service. In addition to the many fantastic grocery and non-food products, Kvickly also has its own butcher and delicatessen department.',
'Pickup time: 17:00',
'M. P. Bruuns Gade 25, 8000 Aarhus C',
'https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'4'),
(5,'2022-04-28 13:49:29',
'Flavourful sushi',
'With us, you always get delicious, fresh sushi and whether it is at one of our restaurants or in the form of take away, quality and taste are always at the same high level.',
'Pickup time: 17:00',
'Frederiksgade 83, 8000 Aarhus',
'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'5'),
(6,'2022-04-28 13:49:29',
'Cheap breakfast',
'Lagkagehusets bread and cakes are baked every day and night by more than 300 bakers and confectioners at 36 bakeries across the country.',
'Pickup time: 10:00',
'M. P. Bruuns Gade 34, 8000 Aarhus C',
'https://images.pexels.com/photos/253419/pexels-photo-253419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'6'),
(7,'2022-04-28 13:49:29',
'Salads and sandwiches ',
'We make every effort to always be able to offer a wide selection of foods - whether you need to reach breakfast before work, or whether you need to treat yourself to a quick meal during your break.',
'Pickup time: 17:00',
'Randersvej 162, 8200 Aarhus',
'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'7'),
(8,'2022-04-28 13:49:29',
'Aarhus biggest buffet ',
' Du bliver den bedste udgave af dig selv med vores sunde, energigivende udvalg og lækre mad. Fantastisk mad har betydning for dit næste skridt.',
'Pickup time: 17:00',
'Østergade 10, 8000 Aarhus',
'https://images.pexels.com/photos/1030947/pexels-photo-1030947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'8'),
(9,'2022-04-28 13:49:29',
'Exciting mystery bag ',
'7-Eleven focuses on the needs of busy customers by offering a wide range of fresh foods, groceries, unique products that can only be purchased from us as well as various service products at reasonable prices.',
'Pickup time: 17:00',
'Immervad 1, 8000 Aarhus',
'https://vergemagazine.co.uk/wp-content/uploads/2022/04/pexels-dima-valkov-5665689-1170x836.jpg',
'9');


!40000 ALTER TABLE `posts` ENABLE KEYS;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `image` longtext CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT 'user image',
  `title` varchar(255) DEFAULT NULL COMMENT 'user title',
  `mail` varchar(255) DEFAULT NULL COMMENT 'user mail',
  `name` varchar(255) DEFAULT NULL COMMENT 'user name',
  `phone` varchar(255) DEFAULT NULL COMMENT 'user phone',
  `password` varchar(60) DEFAULT NULL,
  `admin` BIT DEFAULT NULL COMMENT 'admin rights',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3 COMMENT='newTable';



/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES 
(1,'https://jensens.com/wp-content/uploads/JB_Aktuelt_SE.png','Aarhus C','mnor@eaaa.dk','Jensen Bøfhus','72286320','$2y$10$ReueGM5yrCARCF8AbK9YBO31oglmErDknh0irI7AtG3kJNGSBnwlm',1
),(2,'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png','Aarhus C','anki@eaaa.dk','Starbucks','72286380',NULL,1
),(3,'https://images.jfmedier.dk/images/0/0a/0a9/0a9ffa8c-3a11-4729-8fb5-d01bb7c86888_4_90_0_0_1500_973_1440_934_19652e31.jpg','Aarhus N','race@eaaa.dk','Netto','72286318','$2y$10$ReueGM5yrCARCF8AbK9YBO31oglmErDknh0irI7AtG3kJNGSBnwlm',1
),(4,'https://cdn.freebiesupply.com/logos/large/2x/kvickly-logo-png-transparent.png','Viby J','moab@eaaa.dk','Kvickly','72286339',NULL,1
),(5,'https://static.takeaway.com/images/restaurants/dk/O170307N/logo_465x320.png?timestamp=1650620246','Aarhus C','dob@eaaa.dk','Karma Sushi','72286327',NULL,1
),(6,'https://yt3.ggpht.com/ytc/AKedOLQMi8qpPZ0ecArve2OZMBE9R5EhodJ6hiL4ypKF=s900-c-k-c0x00ffffff-no-rj','Aarhus C','kije@eaaa.dk','Lagkagehuset','7228 6325',NULL,1
),(7,'https://aimcreate.dk/wp-content/uploads/2013/11/Q8-logo.png','Aarhus N','lskj@eaaa.dk','Q8','72286336',NULL,1
),(8,'https://play-lh.googleusercontent.com/45NM60pZknTuPjiDxFw7YSh1ODGhcDPmhRm9XUoMWbRJPtToqJ7gyqowwSvu6q2wdwE','Aarhus C','anst@eaaa.dk','Scandic','72286001',NULL,1
),(9,'https://logos-world.net/wp-content/uploads/2021/08/7-Eleven-Logo-700x394.png','Aarhus C','bki@eaaa.dk','7 ELEVEN','72286316',NULL,1
);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-03  9:24:31

CREATE DATABASE  IF NOT EXISTS `stromper_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `stromper_db`;
-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: stromper_db
-- ------------------------------------------------------
-- Server version	8.0.46

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text,
  `category` varchar(100) DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `precioOriginal` int DEFAULT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Mouse Gamer Pro','https://assets1.ignimgs.com/2018/09/05/logitechgpro-1280-1536169299396_1280w.jpg','Accesorios',30,120000,84000),(2,'Teclado Mecánico RGB','https://tse4.mm.bing.net/th/id/OIP.CboqlJqfnUr45WW3kjsh1AHaFC?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3','Accesorios',NULL,NULL,250000),(3,'Monitor Gamer 144Hz','https://static3.srcdn.com/wordpress/wp-content/uploads/2020/08/Asus-VG278QR-27----Gaming-Monitor-a.jpg','Monitores',NULL,NULL,800000),(4,'Silla Gamer Ergonómica','https://i5.walmartimages.com/asr/7ccfc989-4146-401b-91cb-db97847688b6.237fae1913a0c8f3b2830b728f73816b.jpeg','Accesorios',NULL,NULL,950000),(5,'Laptop RTX 4060','https://tse3.mm.bing.net/th/id/OIP.f-5dNPccOyXJ2Bc_3B1VCAHaGx?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3','Computadores',15,4500000,3825000),(6,'Audífonos RGB 7.1','https://tse3.mm.bing.net/th/id/OIP.EMqm7MX4dWFopKwXD3WYfwHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3','Audio',20,180000,144000),(7,'Webcam Full HD','https://m.media-amazon.com/images/I/61+fX1ehJTL._AC_SL1500_.jpg','Accesorios',NULL,NULL,140000),(8,'Control Xbox Series','https://tse4.mm.bing.net/th/id/OIP.OmOPK-VtUoiuCSA4YWR_aQHaDs?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3','Consolas',NULL,NULL,320000),(9,'Micrófono USB Condensador','https://tse1.mm.bing.net/th/id/OIP.0cLJ3yCrAK0fIfg4i1kosQHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3','Audio',NULL,NULL,290000),(10,'Tablet Android 10','https://tse1.mm.bing.net/th/id/OIP.XNWIuxTRtnnHMb8EsX0HRgHaFx?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3','Tablets',NULL,NULL,700000),(11,'iPhone 15 128GB','https://tse3.mm.bing.net/th/id/OIP.F7cmiJYdWwFT_rN1PHDfjQHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3','Celulares',10,5200000,4680000),(12,'Smartwatch Serie 3','https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop&auto=format&q=80','Wearables',NULL,NULL,350000),(13,'Monitor Curvo 27\"','https://tse4.mm.bing.net/th/id/OIP.lbsJWOus2zhq7mTWsVFL8AHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3','Monitores',25,950000,712500),(14,'PlayStation 5 Slim','https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6566/6566040_rd.jpg','Consolas',12,3200000,2816000),(15,'Samsung Galaxy S25','https://tse4.mm.bing.net/th/id/OIP.MWk4qAg8lTUzMSojspC9JwHaDV?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3','Celulares',NULL,NULL,3800000),(16,'iPad Air M2','https://tse3.mm.bing.net/th/id/OIP.56qdtCgbbECEN1TDr7TlKQHaD4?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3','Tablets',NULL,NULL,2100000),(17,'Macbook Pro 14','https://tse2.mm.bing.net/th/id/OIP.m2-vqur-55AnsnFU12bmLwHaEx?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3','Computadores',NULL,NULL,8489000);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','admin@stromper.co','scrypt:32768:8:1$ddhYWngDgpVAOMGM$7a0b890ae56f3a7826ebebd52656b827ec0786527ebec3de4bf1f636701363d10980488ac2bae2f495f152871c98e6dac089de05050037ac25707a1513da31ff','2026-05-26 16:49:22'),(2,'Harold','usuario@gmail.com','scrypt:32768:8:1$flkqf49h256PxnzB$720c67ecc803add2bd35367f8777482eb889f40fc2a940672e612055bc5f0d38a79d453ba69cd2e1c6b4ce97ec7b92ed80bd0e0ef3e1e709fb41983ae50df96f','2026-05-26 17:00:36');
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

-- Dump completed on 2026-05-26 12:02:03

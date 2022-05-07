CREATE DATABASE  IF NOT EXISTS `besthamburger` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `besthamburger`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: besthamburger
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `local` varchar(45) NOT NULL,
  `bairro` varchar(45) NOT NULL,
  `numero` varchar(45) NOT NULL,
  `rua` varchar(45) NOT NULL,
  `referencia` varchar(45) DEFAULT NULL,
  `cep` varchar(45) NOT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_endereco_usuario_idx` (`usuario_id`),
  CONSTRAINT `fk_endereco_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` int NOT NULL,
  `status` varchar(100) NOT NULL,
  `preco_total` decimal(10,0) NOT NULL,
  `data` datetime NOT NULL,
  `frete` decimal(10,0) NOT NULL,
  `cartao_credito` varchar(45) DEFAULT NULL,
  `pix` varchar(45) DEFAULT NULL,
  `dinheiro` varchar(45) DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pedido_usuario1_idx` (`usuario_id`),
  CONSTRAINT `fk_pedido_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `preco` decimal(10,0) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `img` varchar(45) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (2,'Batata Frita',25,'Batata Frita Simples','../img/acompanhamento01.jpeg','Acompanhamento'),(3,'Frango Frito',50,'Frango Frito','../img/acompanhamento02.jpeg','Acompanhamento'),(4,'Bolinho de Bacalhau',40,'bolinho de bacalhau','../img/acompanhamento03.jpeg','Acompanhamento'),(5,'Onion Ring',20,'Cebolas em rodelas empanadas fritas','../img/acompanhamento04.jpeg','Acompanhamento'),(6,'Batata Completa',30,'Batata com Cheddar e Bacon','../img/acompanhamento05.jpeg','Acompanhamento'),(7,'Salada Completa',25,'Salada Alface com Tomate e Cebola','../img/acompanhamento06.jpeg','Acompanhamento'),(8,'Queijo Nacho',30,'Queijo Nacho','../img/acompanhamento07.jpeg','Acompanhamento'),(9,'Molhos Variados',15,'Pimenta, Barbecue , Maionese verde','../img/acompanhamento08.jpeg','Acompanhamento'),(10,'Chop de Vinho',25,'Chop de Vinho ','../img/bebida.jpg','Bebida'),(11,'Refrigerante',5,'Guarana, Coca-Cola, Fanta, Pepsi','../img/acompanhamentoBebida02.jpg','Bebida'),(12,'Vitamina',15,'Morango, Banana, Morango com Banana, Açaí com Banana','../img/bebidas07.jpg','Bebida'),(13,'Drinks',20,'Bloody Mary, Pinã Colada, Mojito, Gin Tônica, Caipirinha','../img/bebida04.jpg','Bebida'),(14,'Chop',30,'Chop Brahma','../img/acompanhamentoBebida01.jpg','Bebida'),(15,'Água',6,'Água 250 ml','../img/bebida06.jpg','Bebida'),(16,'Suco',10,'Morango, Melancia, Laranja, Limão, Acerola','\'../img/bebida07.jpg','Bebida'),(17,'Milk-Shake',15,'Morango, Chocolate, Nutella, Leite Ninho','../img/bebida08.jpg','Bebida'),(18,'Hamburger Duplo',45,'Hamburger Duplo com queijo cheddar','../img/burguer-1.jpg','Hamburger'),(19,'Hamburger 2',50,'Hamburger com Alface , Queijo , Batata Chips e Picles','../img/burguer-2.jpg','Hamburger'),(20,'Hamburger 3',27,'Hamburger com Pão Branco ou Preto com Rucula , Queijo ou Beterraba (Vegetariano)','../img/burguer-3.jpg','Hamburger'),(21,'Hamburger 4',29,'hamburger com cebola roxa, tomate, queijo prato e molho barbecue','../img/burguer-4.jpg','Hamburger'),(22,'Hamburger 5',30,'Hamburger de frandinha 180g com Pão de gergelim, tomate, queijo mussarela , onion ring , alface','../img/burguer-5.jpg','Hamburger'),(23,'Hamburger 6',42,'Hamburger de picanha 180g com Pão de gergelim, bacon, rucula, cebola roxa, tomate e maionese caseira','../img/burguer-6.jpg','Hamburger'),(24,'Hamburger 7',30,'Hamburger de picanha 180g com Pão de preto, ovo frito, tomate e maionese caseira','../img/burguer-7.jpg','Hamburger'),(25,'Hamburger 8',35,'2 Hamburgers  de angus 180g com Pão de brioche, queijo cheddar, alface picado, tomate, picles e molho especial ','../img/burguer-8.jpg','Hamburger');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_has_pedido`
--

DROP TABLE IF EXISTS `produto_has_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto_has_pedido` (
  `produto_id` int NOT NULL,
  `pedido_id` int NOT NULL,
  `quantidade` int DEFAULT NULL,
  PRIMARY KEY (`produto_id`,`pedido_id`),
  KEY `fk_produto_has_pedido_pedido1_idx` (`pedido_id`),
  KEY `fk_produto_has_pedido_produto1_idx` (`produto_id`),
  CONSTRAINT `fk_produto_has_pedido_pedido1` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`),
  CONSTRAINT `fk_produto_has_pedido_produto1` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_has_pedido`
--

LOCK TABLES `produto_has_pedido` WRITE;
/*!40000 ALTER TABLE `produto_has_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `produto_has_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) NOT NULL,
  `cpf` varchar(45) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `data_de_nascimento` date NOT NULL,
  `avata` varchar(45) DEFAULT NULL,
  `senha` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`),
  UNIQUE KEY `telefone_UNIQUE` (`telefone`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'besthamburger'
--

--
-- Dumping routines for database 'besthamburger'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-07  0:26:35

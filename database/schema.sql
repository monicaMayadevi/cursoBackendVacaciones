DROP TABLE IF EXISTS `peliculas`; 
CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) DEFAULT NULL,
  `clasificacion` varchar(5) DEFAULT NULL,
  `genero` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 
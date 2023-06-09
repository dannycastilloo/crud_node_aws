CREATE DATABASE crudnodejsmysql;

-- using the database
using crudnodejsmysql;

-- creating a table
CREATE TABLE contacto (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    fecha_nac DATETIME NOT NULL,
    foto VARCHAR(50) NOT NULL
);

-- to show all tables
SHOW TABLES;

-- to describe the table
describe crudnodejsmysql;

DROP DATABASE IF EXISTS model_example;
CREATE DATABASE IF NOT EXISTS model_example;
USE model_example;

CREATE TABLE IF NOT EXISTS movies (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    directed_by VARCHAR(100) NOT NULL,
    release_year INT NOT NULL
);

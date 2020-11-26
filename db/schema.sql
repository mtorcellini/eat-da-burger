DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT,
    name TEXT NOT NULL,
    devoured TINYINT,
    primary key (id)
);
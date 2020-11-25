CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT,
    name TEXT NOT NULL,
    devoured BIT,
    primary key (id)
);
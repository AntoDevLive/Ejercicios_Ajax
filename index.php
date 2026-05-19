<?php

header('Content-Type', 'application/json');

function conectarDB() {
    $DB_HOST = 'localhost';
    $DB_NAME = 'ajax';
    $DB_USER = 'root';
    $DB_PASSWORD = 'root';

    try {
        return new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME", "$DB_USER", "$DB_PASSWORD");
    } catch (PDOException $e) {
        die($e->getMessage());
    }
}

$conexion = conectarDB();

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT * FROM usuarios";
    $stmt = $conexion->prepare($query);
    $stmt->execute();
    $usuarios = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode([
        "message" => "usuarios encontrados",
        "usuarios" => $usuarios 
    ]);
}

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("php://input");
    $data = json_decode($data);

    $query = "INSERT INTO usuarios (nombre, apellido, email, telefono) VALUES (:nombre, :apellido, :email, :telefono)";
    $stmt = $conexion->prepare($query);
    $stmt->execute();

    echo json_encode([
        "message" => "usuario creado correctamete",
        "usuarios" => $usuarios
    ]);
}
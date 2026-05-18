<?php

$DB_HOST = 'localhost';
$DB_NAME = 'ajax';
$DB_USER = 'root';
$DB_PASSWORD = 'root';


function conectarDB() {
    
}


$data = file_get_contents("php://input");
$data = json_decode($data);


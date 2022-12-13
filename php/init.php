<?php

error_reporting(E_ALL);
ini_set('display_error', 1);

$host = 'localhost';
$user = 'root';
$password = '';
$database = 'memory-game';
$port = 3306;

$app_db = mysqli_connect( $host, $user, $password, $database, $port);

if($app_db === false){
    die('Error al conectar a la base de datos');
}
<?php
if(! file_exists('php/config.php')){
    die('ERROR: No existe archivo de configuración');
}
require('config.php');

$app_db = mysqli_connect( BD_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT);

if($app_db === false){
    die('Error al conectar a la base de datos');
}

require('funciones.php');
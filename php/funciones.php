<?php

function get_ranking(){
    global $app_db;
    $query = "SELECT * FROM records";
    $result = mysqli_query($app_db, $query);
    if(!$result){
        die( mysqli_error($app_db));
    }

    return mysqli_fetch_all($result, MYSQLI_ASSOC);
}

function insert_score($nickname, $email, $score_time, $movements){
    global $app_db;
    $query = "INSERT INTO records (nickname, email, score_time, movements) VALUES ( '$nickname', '$email' , '$score_time', '$movements' )";
    $result = mysqli_query($app_db, $query);
    if(!$result){
        die(mysqli_error($app_db));
    }
}

function redirect_to($path){
    header('Location:'. SITE_URL .'/'. $path);
    die();
}
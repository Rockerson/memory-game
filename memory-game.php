<?php 
/**
 * Plugin Name: WP Memory Game
 * Plugin URI: https://github.com/Rockerson/memory-game
 * Description: A minigame integrate with WordPress
 * Version: 0.0.1
 * Author: Rockerson
 * Author URI: https://rockerson.github.io/
 */

function mg_Activation(){
    
}

function mg_Deactivation(){

}

function mg_Uninstall(){

}

register_activation_hook(__FILE__, 'mg_Activation');
register_deactivation_hook(__FILE__, 'mg_Deactivation');
register_uninstall_hook(__FILE__, 'mg_Unistall');

add_action('admin_menu', 'MakeMenu');

function MakeMenu(){
    add_menu_page(
        'Memory Game',
        'WP Memory Game',
        'manage_options',
        'mg_menu',
        'ShowMenuPage',
        'dashicons-games'
    );
}

function ShowMenuPage(){
    echo "<h1>Memory Game Settings</h1>";
}

?>
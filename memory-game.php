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
        'Memory Game', //page title
        'WP Memory Game', //menu title
        'manage_options', // capability
        plugin_dir_path(__FILE__).'admin/settings.php', //slug
        null, //content function
        'dashicons-games', // icon
        '1' //priority
    );
}

require_once dirname(__FILE__) . '/game.php';

?>
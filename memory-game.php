<?php 
/**
 * Plugin Name: WP Memory Game by Rockerson
 * Plugin URI: https://github.com/Rockerson/memory-game
 * Description: A minigame integrated with WordPress
 * Version: 0.1.1
 * Author: Rockerson
 * Author URI: https://rockerson.github.io/
 * Text Domain: wp-memory-game-by-rockerson
 * Domain Path:/languages
 */

 //Prefix - > wpmg "word press memory game"

function wpmg_Activation(){
    
}

function wpmg_Deactivation(){

}

function wpmg_Uninstall(){

}

register_activation_hook(__FILE__, 'wpmg_Activation');
register_deactivation_hook(__FILE__, 'wpmg_Deactivation');
register_uninstall_hook(__FILE__, 'wpmg_Unistall');

add_action('admin_menu', 'wpmg_MakeMenu');

function wpmg_MakeMenu(){
    add_menu_page(
        'Memory Game',                                  //page title
        'WP Memory Game',                               //menu title
        'manage_options',                               // capability
        plugin_dir_path(__FILE__).'admin/settings.php', //slug
        null,                                           //content function
        'dashicons-games',                              // icon
        '1'                                             //priority
    );
}

require_once dirname(__FILE__) . '/game.php';

function wpmg_MinigameStyles(){
    wp_enqueue_script('wpmg_styles',plugins_url('css/estilos.css',__FILE__));
}

add_action('wp_enqueue_scripts', 'wpmg_MinigameStyles');

?>
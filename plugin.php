<?php
/**
 * Plugin Name: Block Group
 * Description: Adds a block which can group together other blocks.
 * Author: Alec "Chootin" Tutin
 * Version: 1.1.0
 */

 function loadBlockGroup() {
    wp_enqueue_script(
        'block-group',
        plugin_dir_url(__FILE__).'build/index.js',
        array('wp-blocks', 'wp-editor'),
        true
    );

    define('BM_BLOCK_GROUP', true);
 }

 add_action('enqueue_block_editor_assets', 'loadBlockGroup');
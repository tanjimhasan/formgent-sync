<?php

use FormGent\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

include_once __DIR__ . '/register.php';

wp_enqueue_media();
wp_enqueue_editor();

/**
 * Builder scripts
 */
if ( formgent_post_type() === get_post_type() ) {
    include_once __DIR__ . '/i18n.php';
    Enqueue::script( 'formgent/blocks-editor', 'build/js/blocks-editor', ['lodash'] );
    Enqueue::style( 'formgent/blocks-editor', 'build/css/blocks-editor' );
}

/**
 * Dashboard scripts
 */
if ( 'formgent_page_formgent' ===  $hook_suffix ) {
    include_once __DIR__ . '/i18n.php';
    wp_enqueue_style( 'wp-components' );
    wp_enqueue_style( 'formgent/style' );
    Enqueue::script( 'formgent/admin', 'build/js/admin', ['formgent/notification'] );
}
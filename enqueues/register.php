<?php

defined( 'ABSPATH' ) || exit;

use FormGent\WpMVC\Enqueue\Enqueue;

wp_enqueue_style( 'wp-components' );

Enqueue::register_script( 'formgent/notification', 'build/js/notification' );
Enqueue::register_style( 'formgent/notification', 'build/css/notification' );
Enqueue::register_style( 'formgent/style', 'build/css/app', ['formgent/notification', 'wp-components'] );

/**
 * Block scripts
 */
Enqueue::register_script( 'formgent/blocks-editor', 'build/js/blocks-editor' );
wp_localize_script( 'formgent/blocks-editor', 'formgent_blocks', formgent_config( 'blocks' ) );

// Enqueue::register_script( 'formgent/block/frontend', 'build/js/block/frontend' );

Enqueue::register_style( 'formgent/blocks-editor', 'build/css/blocks-editor' );
wp_register_script( 'formgent/just-validate', formgent_url( 'assets/js/just-validate.min.js' ), [], formgent_version() );
// Enqueue::register_style( 'formgent/blocks-frontend', 'build/css/blocks-frontend' );
// wp_enqueue_style( 'formgent/blocks-frontend' );
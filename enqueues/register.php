<?php

defined( 'ABSPATH' ) || exit;

use FormGent\WpMVC\Enqueue\Enqueue;

wp_enqueue_style( 'wp-components' );

Enqueue::register_script( 'formgent/notification', 'build/js/notification' );
Enqueue::register_style( 'formgent/notification', 'build/css/notification' );
Enqueue::register_style( 'formgent/style', 'build/css/app', ['formgent/notification', 'wp-components'] );
Enqueue::register_script( 'formgent/block/editor', 'build/js/block/editor' );

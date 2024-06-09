<?php

defined( 'ABSPATH' ) || exit;

use FormGent\WpMVC\Enqueue\Enqueue;

wp_enqueue_style( 'wp-components' );

Enqueue::register_style( 'formgent/style', 'build/css/app' );
Enqueue::register_script( 'formgent/block/editor', 'build/js/block/editor' );

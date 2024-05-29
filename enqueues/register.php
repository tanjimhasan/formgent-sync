<?php

use NewForm\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

wp_enqueue_style( 'wp-components' );

Enqueue::register_style( 'newform/style', 'build/css/app' );
Enqueue::register_script( 'newform/block/editor', 'build/js/block/editor' );

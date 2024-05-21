<?php

use NewForm\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

include_once __DIR__ . '/register.php';

Enqueue::register_script( 'newform/modules', 'build/js/modules' );
Enqueue::register_script( 'newform/components', 'build/js/components' );

Enqueue::script( 'newform/admin', 'build/js/admin' );

wp_enqueue_style( 'newform/style' );

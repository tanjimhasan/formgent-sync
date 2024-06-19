<?php

use FormGent\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

include_once __DIR__ . '/register.php';

// Enqueue::script( 'formgent/admin', 'build/js/admin', ['formgent/notification'] );
Enqueue::register_script( 'formgent/modules', 'build/js/modules' );
Enqueue::register_script( 'formgent/components', 'build/js/components' );

Enqueue::script( 'formgent/admin', 'build/js/admin', ['formgent/notification'] );

wp_enqueue_style( 'formgent/style' );

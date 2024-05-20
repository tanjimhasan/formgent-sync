<?php

use NewForm\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

Enqueue::register_script( 'newform/modules', 'build/js/modules' );
Enqueue::register_script( 'newform/components', 'build/js/components' );

Enqueue::script( 'newform/admin', 'build/js/admin' );

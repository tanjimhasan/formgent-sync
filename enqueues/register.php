<?php

use NewForm\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

Enqueue::register_style( 'newform/style', 'build/css/app' );

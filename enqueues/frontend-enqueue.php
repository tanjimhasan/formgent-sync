<?php

use FormGent\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

include_once __DIR__ . '/register.php';

Enqueue::register_script( 'formgent/components', 'build/js/components' );
Enqueue::script( 'formgent/submission', 'build/js/frontend/FormSubmission/index' );

wp_enqueue_script_module( 'formgent/block/frontend', formgent_url( 'assets/build/js/block/frontend.js' ), [], formgent_version() );
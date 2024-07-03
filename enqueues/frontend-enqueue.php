<?php

use FormGent\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

include_once __DIR__ . '/register.php';

Enqueue::register_script( 'formgent/components', 'build/js/components' );
Enqueue::script( 'formgent/submission', 'build/js/frontend/FormSubmission/index' );

$block_frontend_asset = include formgent_dir( 'assets/build/js/block/frontend.asset.php' );

wp_enqueue_script_module( 'formgent/block/frontend', formgent_url( 'assets/build/js/block/frontend.js' ), $block_frontend_asset['dependencies'], $block_frontend_asset['version'] );
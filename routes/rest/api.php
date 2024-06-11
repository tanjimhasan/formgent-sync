<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Http\Controllers\ResponseController;
use FormGent\WpMVC\Routing\Route;

include __DIR__ . '/admin.php';

Route::post( 'responses', [ResponseController::class, 'store'] );

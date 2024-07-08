<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Http\Controllers\ResponseController;
// use FormGent\App\Http\Controllers\FormController;
use FormGent\WpMVC\Routing\Route;

include __DIR__ . '/admin.php';

Route::post( 'responses', [ResponseController::class, 'store'] );
// Route::get( 'forms/{id}', [FormController::class, 'show'] );
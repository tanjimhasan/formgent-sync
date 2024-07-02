<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Http\Controllers\Admin\AnalyticsController;
use FormGent\App\Http\Controllers\ResponseController;
use FormGent\App\Http\Controllers\FormController;
use FormGent\WpMVC\Routing\Route;

include __DIR__ . '/admin.php';

Route::post( 'responses', [ResponseController::class, 'store'] );
Route::get( 'forms/{id}', [FormController::class, 'show'] );

Route::group(
    'analytics', function() {
        Route::post( 'forms/{id}/update-view-count', [ AnalyticsController::class, 'increment_or_decrement_form_view_count' ], [] );
    }
);
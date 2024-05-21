<?php

use NewForm\App\Http\Controllers\Admin\FormController;
use NewForm\WpMVC\Routing\Route;

Route::group(
    'admin', function() {
        Route::group(
            'forms', function() {
                Route::patch( '{id}/status', [FormController::class, 'update_status'] );
                Route::resource( '/', FormController::class );
            }
        );
    }, ['admin']
);

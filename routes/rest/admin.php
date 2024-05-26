<?php

use NewForm\App\Http\Controllers\Admin\EntryController;
use NewForm\App\Http\Controllers\Admin\FormController;
use NewForm\WpMVC\Routing\Route;

Route::group(
    'admin', function() {
        Route::group(
            'forms', function() {
                Route::patch( '{id}/status', [FormController::class, 'update_status'] );
                Route::post( '{id}/duplicate', [FormController::class, 'duplicate'] );
                Route::resource( '/', FormController::class );
            }
        );
        Route::group(
            'entries', function() {
                Route::resource( '/', EntryController::class );
            }
        );
    }, ['admin']
);

<?php

use FormGent\App\Http\Controllers\Admin\EntryController;
use FormGent\App\Http\Controllers\Admin\FormController;
use FormGent\WpMVC\Routing\Route;

Route::group(
    'admin', function() {
        Route::group(
            'forms', function() {
                Route::patch( '{id}/status', [FormController::class, 'update_status'] );
                Route::patch( '{id}/title', [FormController::class, 'update_title'] );
                Route::post( '{id}/duplicate', [FormController::class, 'duplicate'] );
                Route::get( 'select', [FormController::class, 'select'] );
                Route::delete( '{id}/field', [FormController::class, 'delete_field'] );
                Route::post( 'media', [FormController::class, 'insert_media'] );
                Route::delete( '/', [FormController::class, 'delete_bulk_form'] );
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

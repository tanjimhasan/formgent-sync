<?php

use NewForm\App\Http\Controllers\Admin\FormController;
use NewForm\WpMVC\Routing\Route;

Route::group(
    'admin', function() {
        Route::resource( 'form', FormController::class );
    }, ['admin']
);
<?php

use FormGent\App\Http\Controllers\EntryController;
use FormGent\WpMVC\Routing\Route;

include __DIR__ . '/admin.php';

Route::post( 'entry', [EntryController::class, 'store'] );

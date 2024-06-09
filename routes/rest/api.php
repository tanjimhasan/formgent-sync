<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Http\Controllers\EntryController;
use FormGent\WpMVC\Routing\Route;

include __DIR__ . '/admin.php';

Route::post( 'entries', [EntryController::class, 'store'] );

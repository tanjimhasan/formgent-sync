<?php

use NewForm\App\Http\Controllers\UserController;
use NewForm\WpMVC\Routing\Route;

Route::get( 'user', [UserController::class, 'index'], ['admin'] );
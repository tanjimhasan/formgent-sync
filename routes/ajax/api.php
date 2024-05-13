<?php

use NewForm\App\Http\Controllers\UserController;
use NewForm\WpMVC\Routing\Ajax;

Ajax::get( 'user/{id}', [UserController::class, 'index'], ['admin'] );

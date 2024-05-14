<?php

use NewForm\App\Http\Controllers\UserController;
use NewForm\WpMVC\Routing\Response;
use NewForm\WpMVC\Routing\Route;

include __DIR__ . '/admin.php';

Route::get( 'user', [UserController::class, 'index'], ['admin'] );

Route::get(
    'ping', function() {
        return Response::send(
            [
                'message' => 'pong',
                'data'    => [
                    'hello' => 'world'
                ]
            ]
        );
    }
);

Route::post(
    'ping', function() {
        return Response::send(
            [
                'message' => 'pong',
                'data'    => [
                    'hello' => 'world'
                ]
            ]
        );
    }
);
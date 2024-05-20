<?php

use NewForm\App\Http\Controllers\EntryController;
use NewForm\WpMVC\Routing\Response;
use NewForm\WpMVC\Routing\Route;

include __DIR__ . '/admin.php';

Route::post( 'entry', [EntryController::class, 'store'] );

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
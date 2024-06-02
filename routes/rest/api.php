<?php

use FormGent\App\Http\Controllers\EntryController;
use FormGent\WpMVC\Routing\Response;
use FormGent\WpMVC\Routing\Route;

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
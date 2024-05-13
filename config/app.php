<?php

defined( 'ABSPATH' ) || exit;

use NewForm\App\Http\Middleware\EnsureIsUserAdmin;
use NewForm\App\Providers\Admin\MenuServiceProvider;
use NewForm\Database\Migrations\TestMigration;
use NewForm\WpMVC\App;

return [
    'version'                 => get_plugin_data( App::$plugin_root_file )['Version'],

    'rest_api'                => [
        'namespace' => 'new-form',
        'versions'  => []
    ],

    'ajax_api'                => [
        'namespace' => 'new-form',
        'versions'  => []
    ],

    'providers'               => [],

    'admin_providers'         => [
        MenuServiceProvider::class,
    ],

    'middleware'              => [
        'admin' => EnsureIsUserAdmin::class
    ],

    'migration_db_option_key' => 'newform_migrations',

    'migrations'              => [
        'test-migration' => TestMigration::class,
    ]
];
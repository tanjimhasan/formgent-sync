<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Http\Middleware\EnsureIsUserAdmin;
use FormGent\App\Providers\BlockServiceProvider;
use FormGent\App\Providers\ElementorServiceProvider;
use FormGent\App\Providers\Admin\MenuServiceProvider;
use FormGent\App\Providers\ShortCodeServiceProvider;
use FormGent\WpMVC\App;

return [
    'version'                 => get_plugin_data( App::$plugin_root_file )['Version'],

    'rest_api'                => [
        'namespace' => 'formgent',
        'versions'  => []
    ],

    'ajax_api'                => [
        'namespace' => 'formgent',
        'versions'  => []
    ],

    'providers'               => [
        ShortCodeServiceProvider::class,
        ElementorServiceProvider::class,
        BlockServiceProvider::class
    ],

    'admin_providers'         => [
        MenuServiceProvider::class,
    ],

    'middleware'              => [
        'admin' => EnsureIsUserAdmin::class
    ],

    'migration_db_option_key' => 'formgent_migrations',

    'migrations'              => []
];
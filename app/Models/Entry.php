<?php

namespace NewForm\App\Models;

use NewForm\WpMVC\App;
use NewForm\WpMVC\Database\Resolver;
use NewForm\WpMVC\Database\Eloquent\Model;

class Entry extends Model {
    public static function get_table_name():string {
        return 'newform_entries';
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}
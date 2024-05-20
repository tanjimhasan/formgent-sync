<?php

namespace NewForm\App\Models;

use NewForm\WpMVC\App;
use NewForm\WpMVC\Database\Resolver;
use NewForm\WpMVC\Database\Eloquent\Model;

class Field extends Model {
    public static function get_table_name():string {
        return 'newform_fields';
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}
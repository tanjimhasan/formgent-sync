<?php

namespace NewForm\App\Models;

use NewForm\WpMVC\App;
use NewForm\WpMVC\Database\Eloquent\Model;
use NewForm\WpMVC\Database\Resolver;

class UserMeta extends Model {
    public static function get_table_name():string {
        return 'usermeta';
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}
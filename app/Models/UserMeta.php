<?php

namespace FormGent\App\Models;

use FormGent\WpMVC\App;
use FormGent\WpMVC\Database\Eloquent\Model;
use FormGent\WpMVC\Database\Resolver;

class UserMeta extends Model {
    public static function get_table_name():string {
        return 'usermeta';
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}
<?php

namespace FormGent\App\Models;

use FormGent\WpMVC\App;
use FormGent\WpMVC\Database\Resolver;
use FormGent\WpMVC\Database\Eloquent\Model;

class Field extends Model {
    public static function get_table_name():string {
        return 'formgent_fields';
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}
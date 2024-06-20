<?php

namespace FormGent\App\Models;

defined( 'ABSPATH' ) || exit;

use FormGent\WpMVC\App;
use FormGent\WpMVC\Database\Resolver;
use FormGent\WpMVC\Database\Eloquent\Model;
use FormGent\WpMVC\Database\Eloquent\Relations\HasMany;

class Response extends Model {
    public static function get_table_name():string {
        return 'formgent_responses';
    }

    public function answers(): HasMany {
        return $this->has_many( Answer::class, 'response_id', 'id' );
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}
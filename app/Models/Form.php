<?php

namespace FormGent\App\Models;

defined( 'ABSPATH' ) || exit;

use FormGent\WpMVC\App;
use FormGent\WpMVC\Database\Eloquent\Relations\BelongsToOne;
use FormGent\WpMVC\Database\Eloquent\Relations\HasMany;
use FormGent\WpMVC\Database\Resolver;
use FormGent\WpMVC\Database\Eloquent\Model;

class Form extends Model {
    public static function get_table_name():string {
        return 'formgent_forms';
    }

    public function user():BelongsToOne {
        return $this->belongs_to_one( User::class, 'ID', 'created_by' );
    }

    public function responses(): HasMany {
        return $this->has_many( Response::class, 'form_id', 'id' );
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}
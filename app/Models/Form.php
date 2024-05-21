<?php

namespace NewForm\App\Models;

use NewForm\WpMVC\App;
use NewForm\WpMVC\Database\Eloquent\Relations\BelongsToOne;
use NewForm\WpMVC\Database\Eloquent\Relations\HasMany;
use NewForm\WpMVC\Database\Resolver;
use NewForm\WpMVC\Database\Eloquent\Model;

class Form extends Model {
    public static function get_table_name():string {
        return 'newform_forms';
    }

    public function user():BelongsToOne {
        return $this->belongs_to_one( User::class, 'ID', 'created_by' );
    }

    public function entries(): HasMany {
        return $this->has_many( Entry::class, 'form_id', 'id' );
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}
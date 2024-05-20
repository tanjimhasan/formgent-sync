<?php

namespace NewForm\App\Repositories;

use NewForm\App\DTO\FieldDTO;
use NewForm\App\Models\Field;

class FieldRepository {
    /**
     * Create multiple items
     */
    public function creates( int $entry_id, FieldDTO ...$items ) {
        return Field::query()->insert(
            array_map(
                function( FieldDTO $field ) use( $entry_id ) {
                    return $field->set_entry_id( $entry_id )->to_array();
                }, $items
            )
        );
    }
}
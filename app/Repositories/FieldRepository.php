<?php

namespace FormGent\App\Repositories;

defined( 'ABSPATH' ) || exit;

use FormGent\App\DTO\FieldDTO;
use FormGent\App\Models\Field;
use FormGent\WpMVC\Database\Query\Builder;

class FieldRepository {
    public function get( int $entry_id ) {
        return Field::query( 'field' )->with(
            'children', function( Builder $query ) {
                $query->select( 'id', 'parent_id', 'field_id', 'value', 'created_at', 'updated_at' );
            }
        )->select( 'id', 'field_id', 'value', 'created_at', 'updated_at' )->where( 'entry_id', $entry_id )->where_is_null( 'parent_id' )->get();
    }

    public function create( FieldDTO $dto ) {
        return Field::query()->insert_get_id( $dto->to_array() );
    }

    public function update( FieldDTO $dto ) {
        return Field::query()->where( 'id', $dto->get_id() )->update( $dto->to_array() );
    }

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

    /**
     * Create multiple items
     */
    public function creates_from_array( array $array ) {
        return Field::query()->insert( $array );
    }

    public function get_by_field_id( int $entry_id, string $field_id ) {
        return Field::query()->where( 'entry_id', $entry_id )->where( 'field_id', $field_id )->first();
    }

    public function get_by_parent_id( int $entry_id, string $parent_id ) {
        return Field::query()->where( 'entry_id', $entry_id )->where( 'parent_id', $parent_id )->get();
    }

    public function delete( int $id ) {
        return Field::query()->where( 'id', $id )->delete();
    }
}
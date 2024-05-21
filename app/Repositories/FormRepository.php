<?php

namespace NewForm\App\Repositories;

use Exception;
use NewForm\App\DTO\FormDTO;
use NewForm\App\DTO\FormReadDTO;
use NewForm\App\Models\Form;
use NewForm\WpMVC\Database\Query\Builder;

class FormRepository {
    public function get( FormReadDTO $dto ) {
        $form_query  = Form::query( 'form' );
        $count_query = clone $form_query;

        $forms = $form_query->select( 'form.id', 'form.title', 'form.status', 'form.type', 'form.created_by', 'form.created_at', 'form.updated_at' )
                ->with(
                    'user', function( Builder $query ) {
                        $query->select( 'ID', 'display_name as name' );
                    }
                )->with_count(
                    'entries as total_unread_entries', function( Builder $query ) {
                        $query->where( 'is_read', 0 );
                    }
                )->with_count( 'entries as total_entries' )->pagination( $dto->get_per_page(), $dto->get_page() );

        return [
            'total' => $count_query->count(),
            'forms' => $forms,
        ];
    }

    public function create( FormDTO $dto ) {
        return Form::query()->insert_get_id( $dto->to_array() );
    }

    public function update( FormDTO $dto ) {
        $form = $this->get_by_id( $dto->get_id(), [1] );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }

        return Form::query()->where( 'id', $dto->get_id() )->update(
            [
                'title'   => $dto->get_title(),
                'status'  => $dto->get_status(),
                'content' => $dto->get_content(),
            ]
        );
    }

    public function update_status( int $form_id, string $status ) {
        return Form::query()->where( 'id', $form_id )->update( [ 'status' => $status ] );
    }

    public function get_by_id( int $id, $columns = ['*'] ) {
        return Form::query()->select( $columns )->where( 'id', $id )->first();
    }

    public function get_by_id_publish( int $id, $columns = ['*'] ) {
        return Form::query()->select( $columns )->where( 'id', $id )->first();
    }

    public function delete_by_id( int $id ) {
        return Form::query()->where( 'id', $id )->delete();
    }
}
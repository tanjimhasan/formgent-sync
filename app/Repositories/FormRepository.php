<?php

namespace NewForm\App\Repositories;

use Exception;
use NewForm\App\DTO\FormDTO;
use NewForm\App\DTO\FormReadDTO;
use NewForm\App\Models\Form;

class FormRepository {
    public function get( FormReadDTO $dto ) {
        $form_query = Form::query();
        
        $count_query = clone $form_query;
        $forms       = $form_query->pagination( $dto->get_per_page(), $dto->get_page() );
        $total       = $count_query->count();

        return [
            'total' => $total,
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

    public function get_by_id( int $id, $columns = ['*'] ) {
        return Form::query()->select( $columns )->where( 'id', $id )->first();
    }
}
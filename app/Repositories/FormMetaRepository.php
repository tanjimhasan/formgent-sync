<?php

namespace FormGent\App\Repositories;

use Exception;
use FormGent\App\DTO\FormMetaDTO;
use FormGent\App\DTO\FormMetaReadQueryDTO;
use FormGent\App\DTO\FormMetaUpdateDTO;
use FormGent\App\DTO\QueryResponse;
use FormGent\App\Models\FormMeta;

class FormMetaRepository {
    public function get( FormMetaReadQueryDTO $dto ): QueryResponse {
        $query = FormMeta::query();

        if ( $dto->get_id() ) {
            $query->where( 'id', $dto->get_id() );
        }

        if ( $dto->get_form_id() ) {
            $query->where( 'form_id', $dto->get_form_id() );
        }

        if ( $dto->get_meta_key() ) {
            $query->where( 'meta_key', $dto->get_meta_key() );
        }

        if ( $dto->get_meta_value() ) {
            $query->where( 'meta_value', $dto->get_meta_value() );
        }

        $count_query = clone $query;

        // Set Ordering
        switch ( $dto->get_order_by() ) {
            case 'oldest':
                $query->order_by( 'id' );
                break;

            case 'latest':
                $query->order_by_desc( 'id' );
                break;
        }

        return new QueryResponse(
            $query->pagination( $dto->get_per_page(), $dto->get_page(), 100, 1 ), 
            $count_query->count() 
        );
    }

    public function get_by_id( int $id, $columns = ['*'] ) {
        return FormMeta::query()->select( $columns )->where( 'id', $id )->first();
    }
    
    public function get_by_form_id( int $form_id, $columns = ['*'] ) {
        return FormMeta::query()->select( $columns )->where( 'form_id', $form_id )->get();
    }

    public function create( FormMetaDTO $dto ) {
        FormMeta::query()->insert_get_id( $dto->to_array() );
    }

    public function update( FormMetaUpdateDTO $dto ) {
        $form_meta = $this->get_by_id( $dto->get_id(), [1] );

        if ( ! $form_meta ) {
            throw new Exception( esc_html__( 'Form meta not found.', 'formgent' ), 404 );
        }

        return FormMeta::query()->where( 'id', $dto->get_id() )->update(
            [
                'meta_value' => $dto->get_meta_value()
            ] 
        );
    }

    public function delete( int $id ) {
        $form_meta = $this->get_by_id( $id );

        if ( ! $form_meta ) {
            throw new Exception( esc_html__( 'Form meta not found.', 'helpgent' ), 404 );
        }

        return FormMeta::query()->where( 'id', $id )->delete();
    }
}
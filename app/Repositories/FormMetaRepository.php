<?php

namespace FormGent\App\Repositories;

defined( 'ABSPATH' ) || exit;

use Exception;
use FormGent\App\DTO\FormMetaDTO;
use FormGent\App\DTO\FormMetaReadQueryDTO;
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

    /**
     * @throws Exception
     */
    public function update_view_count( int $form_id, int $count, $type = '=' ): int {
        $old_count_meta = FormMeta::query()
            ->where( 'form_id', $form_id )
            ->where( 'meta_key', 'view_count' )
            ->first();

        if ( ! $old_count_meta ) {
            $count = $count < 0 || '-' === $type ? 0 : $count;
            $id    = FormMeta::query()->insert_get_id(
                [
                    'form_id'    => $form_id,
                    'meta_key'   => 'view_count',
                    'meta_value' => $count,
                ]
            );

            if ( $id ) {
                return $count;
            }

            throw new Exception( esc_html__( 'Could not update the view count.', 'formgent' ), 403 );
        }

        $type = in_array( $type, [ '=', '+', '-' ] ) ? $type : '=';

        switch ( $type ) {
            case '+':
                $count = absint( $old_count_meta->meta_value ) + $count;
                break;
            case '-':
                $count = absint( $old_count_meta->meta_value ) - $count;
                $count = $count < 0 ? 0 : $count;
                break;
        }

        $status = FormMeta::query()
            ->where( 'form_id', $form_id )
            ->where( 'meta_key', 'view_count' )
            ->update( [  'meta_value' => $count ] );

        if ( false === $status ) {
            throw new Exception( esc_html__( 'Could not update the view count.', 'formgent' ), 403 );
        }

        return $count;
    }

    public function get_meta( int $form_id, string $meta_key ) {
        return FormMeta::query()->where( 'form_id', $form_id )->where( 'meta_key', $meta_key )->first();
    }

    public function get_by_id( int $id, $columns = ['*'] ) {
        return FormMeta::query()->select( $columns )->where( 'id', $id )->first();
    }
    
    public function get_by_form_id( int $form_id, $columns = ['*'] ) {
        return FormMeta::query()->select( $columns )->where( 'form_id', $form_id )->get();
    }

    public function create( FormMetaDTO $dto ) {
        return FormMeta::query()->insert_get_id( $dto->to_array() );
    }

    public function update( FormMetaDTO $dto ) {
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
            throw new Exception( esc_html__( 'Form meta not found.', 'formgent' ), 404 );
        }

        return FormMeta::query()->where( 'id', $id )->delete();
    }

    public function get_meta_value( int $form_id, string $meta_key ) {
        $meta = $this->get_meta( $form_id, $meta_key );
        if ( ! $meta ) {
            return false;
        }
        return $meta->meta_value;
    }
}
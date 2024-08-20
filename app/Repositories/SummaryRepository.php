<?php

namespace FormGent\App\Repositories;

defined( 'ABSPATH' ) || exit;

use Exception;
use FormGent\App\Models\Answer;

class SummaryRepository {
    public function get( int $form_id, string $field_id, string $field_type, int $page = 0, int $per_page = 0 ) {
        /**
         * @var FormRepository $form_repository
         */
        $form_repository = formgent_singleton( FormRepository::class );
        $form            = $form_repository->get_by_id( $form_id );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }
        
        $fields    = array_values( formgent_get_form_field_settings( parse_blocks( $form->post_content ) ) );
        $field_key = array_search( $field_id, array_column( $fields, 'id' ) );

        if ( ! is_int( $field_key ) ) {
            throw new Exception( __( 'Field not found', 'helpgent' ), 404 );
        }

        $field = $fields[ $field_key ];

        $field_handlers = formgent_config( 'fields' );
        
        if ( empty( $field_handlers[ $field_type ] ) ) {
            throw new Exception( __( 'Field handler not found.', 'helpgent' ), 404 );
        }

        /**
         * @var \FormGent\App\Fields\Field $field_handler
         */
        $field_handler = formgent_singleton( $field_handlers[ $field_type ]['class'] );

        return $field_handler->get_summary( $form, $field, $page, $per_page );
    }

    public function get_fields( int $form_id ) {
        /**
         * @var FormRepository $form_repository
         */
        $form_repository = formgent_singleton( FormRepository::class );
        $form            = $form_repository->get_by_id( $form_id );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }

        $fields       = array_values( formgent_get_form_field_settings( parse_blocks( $form->post_content ) ) );
        $final_fields = [];
        
        $totals = Answer::query()->where( 'form_id', $form_id )->select( 'field_id, COUNT(field_id) as total' )->group_by( 'field_id' )->get();

        foreach ( $fields as $field ) {
            $field_type = $field['field_type'];

            $field_id = $field['id'];

            $total_key = array_search( $field_id, array_column( $totals, 'field_id' ) );

            if ( is_int( $total_key ) ) {
                $total = intval( $totals[ $total_key ]->total );
            } else {
                $total = 0;
            }

            $final_field = [
                'id'             => $field_id,
                'label'          => $field['label'],
                'field_type'     => $field_type,
                'total_response' => $total
            ];

            $final_fields[] = $final_field;
        }

        return $final_fields;
    }
}
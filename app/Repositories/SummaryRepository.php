<?php

namespace FormGent\App\Repositories;

defined( 'ABSPATH' ) || exit;

use Exception;
use FormGent\App\Models\Answer;

class SummaryRepository {
    public function get( int $form_id, string $field_name, int $page = 0, int $per_page = 0 ) {
        /**
         * @var FormRepository $form_repository
         */
        $form_repository = formgent_singleton( FormRepository::class );
        $form            = $form_repository->get_by_id( $form_id );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'helpgent' ), 404 );
        }
        
        $fields = formgent_get_form_field_settings( parse_blocks( $form->post_content ) );

        if ( ! isset( $fields[ $field_name ] ) ) {
            throw new Exception( __( 'Field not found', 'helpgent' ), 404 );
        }

        $field      = $fields[ $field_name ];
        $field_type = $field[ 'field_type' ];

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

        $final_fields = [];

        $totals = Answer::query()
            ->where( 'form_id', $form_id )
            ->where_is_null( 'parent_id' )
            ->select( 'field_name, COUNT(field_name) as total' )
            ->group_by( 'field_name' )
            ->get();

        foreach ( array_values( formgent_get_form_field_settings( parse_blocks( $form->post_content ) ) ) as $field ) {
            $field_type = $field['field_type'];

            $field_name = $field['name'];

            $total_key = array_search( $field_name, array_column( $totals, 'field_name' ) );

            if ( is_int( $total_key ) ) {
                $total = intval( $totals[ $total_key ]->total );
            } else {
                $total = 0;
            }

            $final_field = [
                'field_name'     => $field_name,
                'label'          => isset( $field['label'] ) ? $field['label'] : '',
                'field_type'     => $field_type,
                'total_response' => $total
            ];

            $final_fields[] = $final_field;
        }

        return $final_fields;
    }
}
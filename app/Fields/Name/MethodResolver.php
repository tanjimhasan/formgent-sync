<?php

namespace FormGent\App\Fields\Name;

defined( 'ABSPATH' ) || exit;

use FormGent\App\DTO\AnswerDTO;
use stdClass;
use WP_REST_Request;
use FormGent\WpMVC\RequestValidator\Validator;

trait MethodResolver {
    protected $has_value = true;

    public static function get_key(): string {
        return 'names';
    }

    public function validate( array $field, WP_REST_Request $wp_rest_request, Validator $validator ) {
        $rules = [];
    
        foreach ( $field['fields'] as $children ) {
            if ( '1' === formgent_get_nested_value( 'validations.required.value', $children ) ) {
                $rules[$children['type']] = 'required|string';
            } else {
                $rules[$children['type']] = 'string';
            }
        }

        if ( empty( $rules ) ) {
            return;
        }

        $request = new WP_REST_Request( 'post' );

        $names = $wp_rest_request->get_param( $field['name'] );
    
        if ( ! empty( $names ) && is_array( $names ) ) {
                $this->has_value    = true;
                $this->has_children = true;
                $request->set_body_params( $wp_rest_request->get_param( $field['name'] ) );
        }

        $validator->wp_rest_request = $request;

        $validator->validate( $rules );

        $validator->wp_rest_request = $wp_rest_request;

        static::throw_validator_errors( $validator );
    }

    public function get_field_dto( array $field, WP_REST_Request $wp_rest_request, stdClass $form ): AnswerDTO {
        $dto = new AnswerDTO();
        return $dto->set_form_id( $form->ID )->set_field_type( $field['type'] )->set_field_id( $field['id'] );
    }

    public function get_children_dtos( array $field, WP_REST_Request $wp_rest_request, stdClass $form ): array {
        if ( ! $this->has_value ) { 
            return [];
        }

        $dtos = [];

        $names = $wp_rest_request->get_param( $field['name'] );

        foreach ( $field['fields'] as $children ) {
            if ( isset( $names[$children['type']] ) ) {
                $dto = new AnswerDTO;
                $dto->set_form_id( $form->ID )->set_field_type( $children['type'] )->set_field_id( $children['id'] )->set_value( $names[$children['type']] );

                $dtos[] = $dto;
            }
        }

        return $dtos;
    }
}

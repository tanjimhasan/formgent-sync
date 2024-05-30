<?php

namespace NewForm\App\Fields;

use NewForm\App\DTO\FieldDTO;
use NewForm\App\Exceptions\RequestValidatorException;
use NewForm\WpMVC\RequestValidator\Validator;
use stdClass;
use WP_REST_Request;

abstract class Field {
    abstract public static function get_key(): string;

    public function validate( array $field, WP_REST_Request $wp_rest_request, Validator $validator ) {
        $rules = [];

        if ( '1' === newform_get_nested_value( "general_option.validations.required.value", $field ) ) {
            $rules[] = 'required';
        }

        if ( ! empty( $rules ) ) {

            $validator->validate(
                [
                    static::get_key() => implode( '|', $rules ),
                ]
            );
                
            static::throw_validator_errors( $validator );
        }
    }

    public function get_field_dto( array $field, WP_REST_Request $wp_rest_request, stdClass $form ): FieldDTO {
        $dto = new FieldDTO();
        return $dto->set_form_id( $form->id )->set_field_id( $field['id'] )->set_value( $wp_rest_request->get_param( static::get_key() ) );
    }

    public static function throw_validator_errors( Validator $validator ) {
        if ( $validator->is_fail() ) {
            static::throw_errors( $validator->errors );
        }
    }

    public static function throw_errors( array $errors ) {
        throw new RequestValidatorException( $errors, 422, null );
    }
}
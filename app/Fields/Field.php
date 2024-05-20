<?php

namespace NewForm\App\Fields;

use NewForm\App\DTO\FieldDTO;
use NewForm\App\Exceptions\RequestValidatorException;
use NewForm\WpMVC\RequestValidator\Validator;
use stdClass;
use WP_REST_Request;

abstract class Field {
    abstract public static function get_key(): string;

    abstract public function validate( array $field, WP_REST_Request $wp_rest_request, Validator $validator );

    public function get_field_dto( array $values, array $field, stdClass $form ): FieldDTO {
        $dto = new FieldDTO();

        return $dto->set_field_id( $field['id'] )->set_value( $values[static::get_key()] );
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
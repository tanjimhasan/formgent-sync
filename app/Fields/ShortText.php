<?php

namespace NewForm\App\Fields;

use NewForm\App\Fields\Field;
use NewForm\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

class ShortText extends Field {
    public static function get_key(): string {
        return 'short_text';
    }

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
}

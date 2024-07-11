<?php

namespace FormGent\App\Fields\Dropdown;

defined( 'ABSPATH' ) || exit;

use FormGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

trait MethodResolver {
    public static function get_key(): string {
        return 'dropdown';
    }

    public function validate( array $field, WP_REST_Request $wp_rest_request, Validator $validator ) {
        $rules = [];

        if ( isset( $field["required"] ) && $field["required"] ) {
            $rules[] = 'required';
        }

        $rules[] = 'integer';

        if ( ! empty( $rules ) ) {

            $validator->validate(
                [
                    $field['name'] => implode( '|', $rules ),
                ]
            );
                
            static::throw_validator_errors( $validator );
        }
    }
}

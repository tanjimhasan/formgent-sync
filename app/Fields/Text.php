<?php

namespace NewForm\App\Support\Element\Fields;

use NewForm\App\Fields\Field;
use NewForm\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

class Text extends Field {
    public static function get_key(): string {
        return 'text';
    }

    public function validate( WP_REST_Request $wp_rest_request, Validator $validator, array $field ) {
    }
}

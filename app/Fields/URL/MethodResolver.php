<?php

namespace FormGent\App\Fields\URL;
use FormGent\WpMVC\RequestValidator\Validator;

defined( 'ABSPATH' ) || exit;

use WP_REST_Request;

trait MethodResolver {
    public static function get_key(): string {
        return 'url';
    }

    protected function get_validation_rules(): array {
        return ['string', 'url', 'max:250'];
    }
}

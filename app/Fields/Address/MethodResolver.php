<?php

namespace FormGent\App\Fields\Address;

defined( 'ABSPATH' ) || exit;

trait MethodResolver {
    public static function get_key(): string {
        return 'address';
    }

    protected function get_validation_rules(): array {
        return ['string', 'email', 'max:250'];
    }
}

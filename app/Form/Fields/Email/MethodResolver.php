<?php

namespace FormGent\App\Form\Fields\Email;

defined( 'ABSPATH' ) || exit;

trait MethodResolver {
    public static function get_key(): string {
        return 'email';
    }

    protected function get_validation_rules(): array {
        return ['string', 'email', 'max:250'];
    }
}

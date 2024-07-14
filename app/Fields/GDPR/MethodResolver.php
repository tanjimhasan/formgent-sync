<?php

namespace FormGent\App\Fields\GDPR;

defined( 'ABSPATH' ) || exit;

trait MethodResolver {
    public static function get_key(): string {
        return 'gdpr';
    }

    protected function get_validation_rules(): array {
        return ['string', 'accepted:0,1'];
    }
}
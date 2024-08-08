<?php

namespace FormGent\App\Fields\PhoneNumber;

defined( 'ABSPATH' ) || exit;

trait MethodResolver {
    public static function get_key(): string {
        return 'phone-number';
    }
}

<?php

namespace FormGent\App\Fields\Email;

defined( 'ABSPATH' ) || exit;

trait MethodResolver {
    public static function get_key(): string {
        return 'email';
    }
}

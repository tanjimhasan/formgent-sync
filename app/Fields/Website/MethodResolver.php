<?php

namespace FormGent\App\Fields\Website;

defined( 'ABSPATH' ) || exit;

trait MethodResolver {
    public static function get_key(): string {
        return 'website';
    }
}

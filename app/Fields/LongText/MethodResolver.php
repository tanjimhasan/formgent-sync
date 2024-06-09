<?php

namespace FormGent\App\Fields\LongText;

defined( 'ABSPATH' ) || exit;

trait MethodResolver {
    public static function get_key(): string {
        return 'long_text';
    }
}

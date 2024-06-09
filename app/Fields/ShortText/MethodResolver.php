<?php

namespace FormGent\App\Fields\ShortText;

defined( 'ABSPATH' ) || exit;

trait MethodResolver {
    public static function get_key(): string {
        return 'short_text';
    }
}

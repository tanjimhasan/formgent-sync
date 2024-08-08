<?php

namespace FormGent\App\Fields\TextArea;

defined( 'ABSPATH' ) || exit;

trait MethodResolver {
    public static function get_key(): string {
        return 'textarea';
    }
}

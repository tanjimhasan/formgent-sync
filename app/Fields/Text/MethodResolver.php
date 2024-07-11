<?php

namespace FormGent\App\Fields\Text;

defined( 'ABSPATH' ) || exit;

trait MethodResolver {
    public static function get_key(): string {
        return 'text';
    }
}

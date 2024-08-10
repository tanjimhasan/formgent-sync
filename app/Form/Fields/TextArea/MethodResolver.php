<?php

namespace FormGent\App\Form\Fields\TextArea;

defined( 'ABSPATH' ) || exit;

trait MethodResolver {
    public static function get_key(): string {
        return 'textarea';
    }
}

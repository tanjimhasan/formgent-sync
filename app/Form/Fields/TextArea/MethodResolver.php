<?php

namespace FormGent\App\Form\Fields\TextArea;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Summary\Pagination;

trait MethodResolver {

    use Pagination;

    public static function get_key(): string {
        return 'textarea';
    }
}

<?php

namespace FormGent\App\Form\Fields\PhoneNumber;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Summary\Pagination;

trait MethodResolver {

    use Pagination;

    public static function get_key(): string {
        return 'phone-number';
    }
}

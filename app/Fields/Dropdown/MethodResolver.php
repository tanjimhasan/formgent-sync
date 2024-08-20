<?php

namespace FormGent\App\Fields\Dropdown;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Fields\SingleChoice\MethodResolver as SingleChoiceMethodResolver;
use FormGent\App\Summary\Pagination;

trait MethodResolver {

    use SingleChoiceMethodResolver;
    use Pagination;

    public static function get_key(): string {
        return 'dropdown';
    }
}

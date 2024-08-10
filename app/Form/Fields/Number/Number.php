<?php

namespace FormGent\App\Form\Fields\Number;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Field;
use FormGent\App\Form\Fields\Summary\Pagination;

class Number extends Field {
    use MethodResolver;
    use Pagination;

    protected function get_validation_rules(): array {
        return ['integer'];
    }
}
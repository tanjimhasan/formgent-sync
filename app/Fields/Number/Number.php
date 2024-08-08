<?php

namespace FormGent\App\Fields\Number;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Fields\Field;

class Number extends Field {
    use MethodResolver;

    protected function get_validation_rules(): array {
        return ['integer'];
    }
}
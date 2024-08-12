<?php

namespace FormGent\App\Form\Fields\Number;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Field;

class Number extends Field {
    use MethodResolver;

    protected function get_validation_rules(): array {
        return ['integer'];
    }
}
<?php

namespace FormGent\App\Form\Fields\TextArea;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Field;

class TextArea extends Field {
    use MethodResolver;

    protected function get_validation_rules(): array {
        return ['string', 'max:1000'];
    }
}

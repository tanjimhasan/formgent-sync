<?php

namespace FormGent\App\Fields\TextArea;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Fields\Field;

class TextArea extends Field {
    use MethodResolver;

    protected function get_validation_rules(): array {
        return ['string', 'max:1000'];
    }
}

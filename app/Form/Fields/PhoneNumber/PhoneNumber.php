<?php

namespace FormGent\App\Form\Fields\PhoneNumber;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Field;

class PhoneNumber extends Field {
    use MethodResolver;

    protected function get_validation_rules(): array {
        return ['string', 'max:50'];
    }
}
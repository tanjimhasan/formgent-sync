<?php

namespace FormGent\App\Form\Fields\PhoneNumber;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Field;
use FormGent\App\Form\Fields\Summary\Pagination;

class PhoneNumber extends Field {
    use MethodResolver;
    use Pagination;

    protected function get_validation_rules(): array {
        return ['string', 'max:50'];
    }
}
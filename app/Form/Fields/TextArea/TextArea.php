<?php

namespace FormGent\App\Form\Fields\TextArea;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Field;
use FormGent\App\Form\Summary\Pagination;

class TextArea extends Field {
    use MethodResolver;
    use Pagination;

    protected function get_validation_rules(): array {
        return ['string', 'max:1000'];
    }
}

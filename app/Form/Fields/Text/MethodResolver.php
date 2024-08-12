<?php

namespace FormGent\App\Form\Fields\Text;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Summary\Pagination;

trait MethodResolver {
    
    use Pagination;

    public static function get_key(): string {
        return 'text';
    }

    protected function get_validation_rules(): array {
        return ['string', 'max:250'];
    }
}

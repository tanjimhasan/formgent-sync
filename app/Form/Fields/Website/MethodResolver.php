<?php

namespace FormGent\App\Form\Fields\Website;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Summary\Pagination;

trait MethodResolver {

    use Pagination;
    
    public static function get_key(): string {
        return 'website';
    }

    protected function get_validation_rules(): array {
        return ['string', 'url', 'max:250'];
    }
}

<?php

namespace FormGent\App\Form\Fields\GDPR;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Summary\Pagination;

trait MethodResolver {
    
    use Pagination;

    public static function get_key(): string {
        return 'gdpr';
    }

    protected function get_validation_rules(): array {
        return ['string', 'accepted:0,1'];
    }
}

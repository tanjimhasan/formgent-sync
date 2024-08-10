<?php

namespace FormGent\App\Form\Fields\GDPR;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Field;
use FormGent\App\Form\Summary\Pagination;

class GDPR extends Field {
    use MethodResolver;
    use Pagination;
}
<?php

namespace FormGent\App\Form\Fields\Website;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Field;
use FormGent\App\Form\Fields\Summary\Pagination;

class Website extends Field {
    use MethodResolver;
    use Pagination;
}

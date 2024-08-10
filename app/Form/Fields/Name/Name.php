<?php

namespace FormGent\App\Form\Fields\Name;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Field;
use FormGent\App\Form\Summary\Pagination;

class Name extends Field {
    use MethodResolver;
    use Pagination;
}

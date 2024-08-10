<?php

namespace FormGent\App\Form\Fields\Text;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Field;
use FormGent\App\Form\Summary\Pagination;

class Text extends Field {
    use MethodResolver;
    use Pagination;
}

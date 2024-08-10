<?php

namespace FormGent\App\Form\Fields\Email;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Field;
use FormGent\App\Form\Fields\Summary\Pagination;

class Email extends Field {
    use MethodResolver;
    use Pagination;
}

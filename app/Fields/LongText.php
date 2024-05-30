<?php

namespace NewForm\App\Fields;

use NewForm\App\Fields\Field;

class LongText extends Field {
    public static function get_key(): string {
        return 'long_text';
    }
}

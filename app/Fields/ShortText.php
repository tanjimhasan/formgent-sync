<?php

namespace NewForm\App\Fields;

use NewForm\App\Fields\Field;

class ShortText extends Field {
    public static function get_key(): string {
        return 'short_text';
    }
}

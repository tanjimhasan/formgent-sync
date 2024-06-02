<?php

namespace FormGent\App\Fields;

use FormGent\App\Fields\Field;

class LongText extends Field {
    public static function get_key(): string {
        return 'long_text';
    }
}

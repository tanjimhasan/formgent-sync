<?php

use NewForm\App\Fields\ShortText;
use NewForm\App\Fields\LongText;

return apply_filters(
    'newform_fields', [
        ShortText::get_key() => ShortText::class,
        LongText::get_key()  => LongText::class
    ]
);
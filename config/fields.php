<?php

use FormGent\App\Fields\ShortText;
use FormGent\App\Fields\LongText;

return apply_filters(
    'formgent_fields', [
        ShortText::get_key() => ShortText::class,
        LongText::get_key()  => LongText::class
    ]
);
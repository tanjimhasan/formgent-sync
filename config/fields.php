<?php

use NewForm\App\Fields\ShortText;

return apply_filters(
    'newform_fields', [
        ShortText::get_key() => ShortText::class
    ]
);
<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Fields\Name\Name;
use FormGent\App\Fields\ShortText\ShortText;
use FormGent\App\Fields\LongText\LongText;

return apply_filters(
    'formgent_fields', [
        ShortText::get_key() => ShortText::class,
        LongText::get_key()  => LongText::class,
        Name::get_key()      => Name::class
    ]
);
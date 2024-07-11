<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Fields\Name\Name;
use FormGent\App\Fields\Email\Email;
use FormGent\App\Fields\Text\Text;
use FormGent\App\Fields\TextArea\TextArea;
use FormGent\App\Fields\Number\Number;

return apply_filters(
    'formgent_fields', [
        Text::get_key()     => Text::class,
        TextArea::get_key() => TextArea::class,
        Name::get_key()     => Name::class,
        Email::get_key()    => Email::class,
        Number::get_key()   => Number::class,
    ]
);
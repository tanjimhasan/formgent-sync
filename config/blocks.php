<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Fields\Name\Name;
use FormGent\App\Fields\Email\Email;
use FormGent\App\Fields\Text\Text;
use FormGent\App\Fields\Number\Number;

return [
    'formgent/form'    => [],
    'formgent/name'    => [
        'types'      => ['general', 'conversational'],
        'field_type' => Name::get_key(),
    ],
    'formgent/email'   => [
        'types'      => ['general', 'conversational'],
        'field_type' => Email::get_key(),
    ],
    'formgent/text'    => [
        'types'      => ['general', 'conversational'],
        'field_type' => Text::get_key(),
    ],
    'formgent/number'  => [
        'types'      => ['general', 'conversational'],
        'field_type' => Number::get_key(),
    ],
    'formgent/website' => [
        'types'      => ['general', 'conversational'],
        'field_type' => '',
    ]
];
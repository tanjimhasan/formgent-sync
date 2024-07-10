<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Fields\Name\Name;
use FormGent\App\Fields\Email\Email;
use FormGent\App\Fields\ShortText\ShortText;
use FormGent\App\Fields\Number\Number;
use FormGent\App\Fields\Button\Button;
use FormGent\App\Fields\Phone\Phone;
use FormGent\App\Fields\Select\Select;
use FormGent\App\Fields\Address\Address;

return [
    'formgent/form'         => [],
    'formgent/name'         => [
        'types'      => ['general', 'conversational'],
        'field_type' => Name::get_key(),
    ],
    'formgent/email'        => [
        'types'      => ['general', 'conversational'],
        'field_type' => Email::get_key(),
    ],
    'formgent/short-text'   => [
        'types'      => ['general', 'conversational'],
        'field_type' => ShortText::get_key(),
    ],
    'formgent/number'       => [
        'types'      => ['general', 'conversational'],
        'field_type' => Number::get_key()
    ],
    'formgent/button'       => [
        'types'      => ['general', 'conversational'],
        'field_type' => Button::get_key()
    ],
    'formgent/phone-number' => [
        'types'      => ['general', 'conversational'],
        'field_type' => Phone::get_key()
    ],
    'formgent/select'       => [
        'types'      => ['general', 'conversational'],
        'field_type' => Select::get_key()
    ],
    'formgent/address'      => [
        'types'      => ['general', 'conversational'],
        'field_type' => Address::get_key()
    ]
];
<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Form\Fields\Name\Name;
use FormGent\App\Form\Fields\Email\Email;
use FormGent\App\Form\Fields\Text\Text;
use FormGent\App\Form\Fields\TextArea\TextArea;
use FormGent\App\Form\Fields\Number\Number;
use FormGent\App\Form\Fields\GDPR\GDPR;
use FormGent\App\Form\Fields\PhoneNumber\PhoneNumber;
use FormGent\App\Form\Fields\Website\Website;

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
    'formgent/text'         => [
        'types'      => ['general', 'conversational'],
        'field_type' => Text::get_key(),
    ],
    'formgent/textarea'     => [
        'types'      => ['general', 'conversational'],
        'field_type' => TextArea::get_key(),
    ],
    'formgent/number'       => [
        'types'      => ['general', 'conversational'],
        'field_type' => Number::get_key()
    ],
    // 'formgent/button'        => [
    //     'types'      => ['general', 'conversational'],
    //     'field_type' => ''
    // ],
    'formgent/phone-number' => [
        'types'      => ['general', 'conversational'],
        'field_type' => PhoneNumber::get_key(),
    ],
    // 'formgent/dropdown'      => [
    //     'types'      => ['general', 'conversational'],
    //     'field_type' => ''
    // ],
    // 'formgent/single-choice' => [
    //     'types'      => ['general', 'conversational'],
    //     'field_type' => ''
    // ],
    // 'formgent/multi-choice'  => [
    //     'types'      => ['general', 'conversational'],
    //     'field_type' => ''
    // ],
    // 'formgent/address'       => [
    //     'types'      => ['general', 'conversational'],
    //     'field_type' => ''
    // ],
    'formgent/gdpr'         => [
        'types'      => ['general', 'conversational'],
        'field_type' => GDPR::get_key()
    ],
    'formgent/website'      => [
        'types'      => ['general', 'conversational'],
        'field_type' => Website::get_key(),
    ]
];
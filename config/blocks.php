<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Fields\Name\Name;
use FormGent\App\Fields\Email\Email;

return [
    'formgent/form'  => [
        'title' => esc_html__( 'Form', 'formgent' ),
        'attrs' => [
            'formId' => [
                'type'    => 'string',
                'default' => '0',
            ]
        ],
    ],
    'formgent/name'  => [
        'title'      => esc_html__( 'Name', 'formgent' ),
        'types'      => ['general', 'conversational'],
        'field_type' => Name::get_key(),
        'attrs'      => [
            'id'      => [ // 
                'type'    => 'string',
                'default' => '',
            ],
            'name'    => [
                'type'    => 'string',
                'default' => 'names',
            ],
            'content' => [
                'type'    => 'string',
                'default' => 'Content for edit',
            ],
            'label'   => [
                'type'    => 'string',
                'default' => 'Hello World',
            ],
            'format'  => [
                'type'    => 'string',
                'default' => 'first_last',
            ],
        ]
    ],
    'formgent/email' => [
        'title'      => esc_html__( 'Email', 'formgent' ),
        'types'      => ['general', 'conversational'],
        'field_type' => Email::get_key(),
        'attrs'      => [
            'id'    => [
                'type'    => 'string',
                'default' => '',
            ],
            'name'  => [
                'type'    => 'string',
                'default' => 'email',
            ],
            'value' => [
                'type'    => 'string',
                'default' => 'test@formgent.com',
            ],
            'label' => [
                'type'    => 'string',
                'default' => 'Formgent Email',
            ],
        ]
    ]
];
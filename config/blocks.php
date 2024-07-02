<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Fields\Name\Name;

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
        'title' => esc_html__( 'Name', 'formgent' ),
        'types' => ['general', 'conversational'],
        'attrs' => [
            'id'      => [
                'type'    => 'string',
                'default' => '',
            ],
            'type'    => [
                'type'    => 'string',
                'default' => Name::get_key(),
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
        'title' => esc_html__( 'Email', 'formgent' ),
        'types' => ['general', 'conversational'],
        'attrs' => [
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
<?php

defined( 'ABSPATH' ) || exit;

return [
    'formgent/form' => [
        'title' => esc_html__( 'Form', 'formgent' ),
        'attrs' => [
            'formId' => [
                'type'    => 'string',
                'default' => '0',
            ]
        ],
    ],
    'formgent/name' => [
        'title' => esc_html__( 'Names', 'formgent' ),
        'types' => ['general', 'conversational'],
        'attrs' => [
            'id'      => [
                'type'    => 'string',
                'default' => '',
            ],
            'name'    => [
                'type'    => 'string',
                'default' => 'name',
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
            'switch'  => [
                'type'    => 'string',
                'default' => '0',
            ],
        ]
    ]
];
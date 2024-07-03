<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\Fields\Name\Name;
use FormGent\App\Fields\Email\Email;
use FormGent\App\Fields\ShortText\ShortText;

return [
    'formgent/form'       => [
        'title' => esc_html__( 'Form', 'formgent' ),
        'attrs' => [
            'formId' => [
                'type'    => 'string',
                'default' => '0',
            ]
        ],
    ],
    'formgent/name'       => [
        'title'      => esc_html__( 'Names', 'formgent' ),
        'types'      => ['general', 'conversational'],
        'field_type' => Name::get_key(),
        'attrs'      => [
            'id'       => [
                'type'    => 'string',
                'default' => '',
            ],
            'name'     => [
                'type'    => 'string',
                'default' => 'names',
            ],
            'content'  => [
                'type'    => 'string',
                'default' => 'Content for edit',
            ],
            'label'    => [
                'type'    => 'string',
                'default' => 'Hello World',
            ],
            'format'   => [
                'type'    => 'string',
                'default' => 'first_last',
            ],
            'checkbox' => [
                'type'    => 'string',
                'default' => '0',
            ],
            'switch'   => [
                'type'    => 'boolean',
                'default' => true,
            ],
            'margin'   => [
                'type'    => 'string',
                'default' => '10px',
            ],
            'padding'  => [
                'type'    => 'string',
                'default' => '10px',
            ],
            'repeater' => [
                'type'    => 'string',
                'default' => '[]',
            ]
        ]
    ],
    'formgent/email'      => [
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
    ],
    'formgent/short-text' => [
        'title'      => esc_html__( 'Short Text', 'formgent' ),
        'types'      => ['general', 'conversational'],
        'field_type' => ShortText::get_key(),
        'attrs'      => [
            'id'              => [
                'type'    => 'string',
                'default' => '',
            ],
            'name'            => [
                'type'    => 'string',
                'default' => 'short_text',
            ],
            'value'           => [
                'type'    => 'string',
                'default' => 'Short Text Value',
            ],
            'placeholder'     => [
                'type'    => 'string',
                'default' => 'Short Text Placeholder',
            ],
            'label'           => [
                'type'    => 'string',
                'default' => 'Label',
            ],
            'label_alignment' => [
                'type'    => 'string',
                'default' => 'left',
            ],
            'sub_label'       => [
                'type'    => 'string',
                'default' => 'Sub Label',
            ],
            'required'        => [
                'type'    => 'boolean',
                'default' => false,
            ],
        ]
    ]
];
<?php

defined( 'ABSPATH' ) || exit;

return [
    'form' => [
        'title' => esc_html__( 'Form', 'formgent' )
    ],
    'name' => [
        'title' => esc_html__( 'Name', 'formgent' ),
        'types' => ['general', 'conversational']
    ]
];
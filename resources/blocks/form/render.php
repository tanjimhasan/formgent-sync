<?php defined( 'ABSPATH' ) || exit;

use FormGent\WpMVC\View\View; 

$post = get_post( $attributes['formId'] );

if ( empty( $post ) ) {
    echo "Form not found";
    return;
}

View::render(
    'form', [
        'fields' => do_blocks( $post->post_content )
    ]
);
<?php defined( 'ABSPATH' ) || exit;

use FormGent\WpMVC\View\View; 

$post = get_post( $attributes['formId'] );

// error_log( print_r( formgent_get_form_field_settings( parse_blocks( $post->post_content ) ), true ) );

if ( empty( $post ) ) {
    echo "Form not found";
    return;
}

View::render(
    'form', [
        'form'            => $post,
        'fields'          => do_blocks( $post->post_content ),
        'form_attributes' => get_block_wrapper_attributes()
    ]
);
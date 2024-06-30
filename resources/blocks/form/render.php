<?php defined( 'ABSPATH' ) || exit;

use FormGent\WpMVC\View\View; 

$post = get_post( $attributes['formId'] );

// $blocks       = parse_blocks( $post->post_content );
// $block_config = formgent_config( 'blocks' );

// $values = [];

// foreach ( $blocks as $block ) {
//     if ( empty( $block['blockName'] ) ) {
//         continue;
//     }
    
//     $default_values = [];

//     foreach ( $block_config[$block['blockName']]['attrs'] as $key => $attr ) {
//         $default_values[$key] = $attr['default'];
//     }
//     $block_value = array_merge( $default_values, $block['attrs'] );
    
//     $values[$block_value['name']] = $block_value;
// }

// error_log( print_r( $values, true ) );

if ( empty( $post ) ) {
    echo "Form not found";
    return;
}

View::render(
    'form', [
        'fields' => do_blocks( $post->post_content )
    ]
);
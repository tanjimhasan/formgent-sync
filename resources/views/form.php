<?php defined( 'ABSPATH' ) || exit;

wp_enqueue_script( 'wp-api-fetch' );

$data = formgent_get_form_field_settings( parse_blocks( $form->post_content ) );
$data = array_map(
    function( $item ) {
        unset( $item['label'] );
        unset( $item['sub_label'] );
        unset( $item['description'] );
        return $item;
    }, $data 
);

$unique_id = str_replace( '-', '_', wp_unique_id( 'formgent-store' ) );

$context = [
    'formId'         => $form->ID,
    'blocksSettings' => $data,
    'data'           => formgent_form_default_values( $data ),
];

?>
<div class="formgent-form">
    <form
        id="formgent-<?php formgent_render( $unique_id ) ?>"
        <?php formgent_render( get_block_wrapper_attributes() ); ?>
        data-wp-interactive="formgent/form"
        data-wp-context='<?php formgent_render( wp_json_encode( $context ) ); ?>'
        data-wp-init="callbacks.init"
    >
        <div class="formgent-notices"></div>
        <?php formgent_render( $fields )?>
        <!-- Honeypot field -->
        <input
            type="hidden"
            name="formgent-honeypot-<?php formgent_render( $form->ID ) ?>"
            id="formgent-honeypot-<?php formgent_render( $form->ID ) ?>"
        >
        <button type="submit" class="formgent-btn formgent-primary formgent-btn-md">Submit</button>
    </form>
</div>
<?php defined( 'ABSPATH' ) || exit; ?>
<?php

//$attributes

// Generate unique id for aria-controls.
$unique_id = wp_unique_id( 'p-' );
?>

<div
    <?php formgent_render( get_block_wrapper_attributes() ); ?>
    data-wp-interactive="create-block"
    <?php formgent_render( wp_interactivity_data_wp_context( [ 'isOpen' => false ] ) ); ?>
    data-wp-watch="callbacks.logIsOpen"
>
    <button
        type="button"
        data-wp-on--click="actions.toggle"
        data-wp-bind--aria-expanded="context.isOpen"
        aria-controls="<?php echo esc_attr( $unique_id ); ?>"
    >
        <?php esc_html_e( 'Toggle', 'my-first-interactive-block' ); ?>
    </button>

    <p
        id="<?php echo esc_attr( $unique_id ); ?>"
        data-wp-bind--hidden="!context.isOpen"
    >
        <?php
            esc_html_e( 'My First Interactive Block - hello from an interactive block!', 'my-first-interactive-block' );
        ?>
    </p>
</div>
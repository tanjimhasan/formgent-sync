<?php defined( 'ABSPATH' ) || exit; ?>

<div class="formgent-editor-block-list__single formgent-editor-block-list__single--button formgent-editor-block-list__single--csr formgent-editor-block-align-<?php echo esc_attr( $attributes['label_alignment'] ); ?>" style="--formgent-btn-bg-color: <?php echo esc_attr( $attributes['background_color'] ); ?>">
    <button type="submit" class="formgent-btn formgent-btn-md formgent-btn-<?php echo esc_attr( $attributes['button_style'] ); ?>">
        <?php formgent_render( wp_kses_post( $attributes['button_text'] ) ); ?>
    </button>
</div>
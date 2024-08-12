<?php defined( 'ABSPATH' ) || exit; ?>

<div class="formgent-editor-block-list__single formgent-editor-block-list__single--csr">
    <label
        for="<?php echo esc_html( $attributes['name'] ); ?>"
        class= "formgent-editor-block-list__single__label-container formgent-label-align-<?php echo esc_html( $attributes['label_alignment'] ); ?>"
    >
        <?php echo esc_attr( $attributes['label'] ); ?>
        <?php if ( esc_html( $attributes['required'] ) ) : ?>
            <span class="formgent-editor-block-list__single__label__required">
                *
            </span>
        <?php endif; ?>
    </label>
    <div class="formgent-editor-block-list__single__wrapper">
        <input
            class="formgent-editor-block-list__single__input"
            type="email"
            name="<?php echo esc_attr( $attributes['name'] ); ?>"
            id="<?php echo esc_attr( $attributes['name'] ); ?>"
            placeholder="<?php echo esc_attr( $attributes['placeholder'] ); ?>"
            data-wp-interactive="formgent/form"
            data-wp-on--input="actions.updateInput"
            data-wp-bind--value="context.data.<?php echo esc_attr( $attributes['name'] ); ?>"
        />
        <span class="formgent-editor-block-list__single__sub-label">
            <?php echo esc_attr( $attributes['sub_label'] ); ?>
        </span>
    </div>
</div>
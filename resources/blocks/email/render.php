<?php defined( 'ABSPATH' ) || exit; ?>

<div class="formgent-form-field">
    <label for="<?php echo esc_html( $attributes['name'] ); ?>" class="formgent-form-field__label"><?php formgent_render( $attributes['label'] ); ?></label>
    <div className="formgent-editor-block-list__single__wrapper">
        <input
            className="formgent-editor-block-list__single__input"
            type="email"
            name="<?php echo esc_attr( $attributes['name'] ); ?>"
            id="<?php echo esc_attr( $attributes['name'] ); ?>"
            placeholder="<?php echo esc_attr( $attributes['placeholder'] ); ?>"
            data-wp-interactive="formgent/form"
            data-wp-on--input="actions.updateInput"
            data-wp-bind--value="context.data.<?php echo esc_attr( $attributes['name'] ); ?>"
        />
        <span className="formgent-editor-block-list__single__sub-label">
            <?php echo esc_attr( $attributes['sub_label'] ); ?>
        </span>
    </div>
</div>
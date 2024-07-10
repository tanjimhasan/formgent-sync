<?php defined( 'ABSPATH' ) || exit; ?>

<div class="formgent-form-field">
    <label for="<?php echo esc_attr( $attributes['name'] ); ?>" class="formgent-form-field__label"><?php echo esc_attr( $attributes['label'] ); ?></label>
    <input
        type="text"
        name="<?php echo esc_attr( $attributes['name'] ); ?>"
        id="<?php echo esc_attr( $attributes['name'] ); ?>"
        class="formgent-form-field__element"
        data-wp-interactive="formgent-block"
        data-wp-on--input="actions.updateShortText"
        data-wp-bind--value="context.short_text"
    >
</div>
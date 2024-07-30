<?php defined( 'ABSPATH' ) || exit; ?>

<div class="formgent-form-field">
    <label for="<?php echo esc_html( $attributes['name'] ); ?>" class="formgent-form-field__label"><?php echo esc_html( $attributes['label'] ); ?></label>
    <input
        type="text"
        name="<?php echo esc_attr( $attributes['name'] ); ?>"
        id="<?php echo esc_attr( $attributes['name'] ); ?>"
        class="formgent-form-field__element"
        data-wp-interactive="formgent-block"
        data-wp-on--input="actions.updateInput"
        data-wp-bind--value="context.<?php echo esc_attr( $attributes['name'] ); ?>"
    >
</div>
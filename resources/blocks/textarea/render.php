<?php defined( 'ABSPATH' ) || exit; ?>

<div class="formgent-form-field">
    <label for="<?php echo esc_html( $attributes['name'] ); ?>" class="formgent-form-field__label"><?php echo esc_html( $attributes['label'] ); ?></label>
    <textarea
        name="<?php echo esc_attr( $attributes['name'] ); ?>"
        id="<?php echo esc_attr( $attributes['name'] ); ?>"
        class="formgent-form-field__element"
        col="8"
        rows="5"
        data-wp-interactive="formgent-block"
        data-wp-on--input="actions.updateInput"
        data-wp-bind--value="context.<?php echo esc_attr( $attributes['name'] ); ?>"></textarea>
</div>
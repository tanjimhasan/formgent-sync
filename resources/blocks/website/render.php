<?php defined( 'ABSPATH' ) || exit; ?>

<div class="formgent-form-field">
    <label for="<?php echo esc_attr( $attributes['name'] ); ?>" class="formgent-form-field__label"><?php echo esc_attr( $attributes['label'] ); ?></label>
    <input
        type="url"
        name="<?php echo esc_attr( $attributes['name'] ); ?>"
        id="<?php echo esc_attr( $attributes['name'] ); ?>"
        class="formgent-form-field__element"
        data-wp-interactive="formgent-block"
        data-wp-on--input="actions.updateWebsite"
        data-wp-bind--value="context.<?php echo esc_attr( $attributes['name'] ); ?>"
    >
</div>
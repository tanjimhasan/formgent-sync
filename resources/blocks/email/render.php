<?php defined( 'ABSPATH' ) || exit; ?>

<div class="formgent-form-field">
    <label for="<?php echo esc_html( $attributes['name'] ); ?>" class="formgent-form-field__label"><?php formgent_render( $attributes['label'] ); ?></label>
    <input
        type="email"
        name="<?php echo esc_attr( $attributes['name'] ); ?>"
        id="<?php echo esc_attr( $attributes['name'] ); ?>"
        class="formgent-form-field__element"
        data-wp-interactive="formgent/form"
        data-wp-on--input="actions.updateInput"
        data-wp-bind--value="context.data.<?php echo esc_attr( $attributes['name'] ); ?>"
    >
</div>
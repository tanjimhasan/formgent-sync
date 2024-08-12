<?php defined( 'ABSPATH' ) || exit; ?>

<?php

// $countries = formgent_config( 'countries' );
// $flag_url  = formgent_url( 'assets/images/flags' );
?>

<div class="formgent-form-field">
    <label for="<?php echo esc_html( $attributes['name'] ); ?>" class="formgent-form-field__label"><?php echo esc_html( $attributes['label'] ); ?></label>
    <div class="formgent-editor-block-list__single__wrapper formgent-editor-block-list__single__phone">
        <select 
            name="<?php echo esc_attr( $attributes['name'] ); ?>-dial-code"
            id="<?php echo esc_attr( $attributes['name'] ); ?>-dial-code"
            data-wp-init="callbacks.phoneNumberInit"
            data-wp-on--change="actions.updateDialCode"
        >
        </select>
        <div className="formgent-editor-block-list__single__dialer__content">
            <span data-wp-interactive="formgent/form" data-wp-text="context.data.<?php echo esc_attr( $attributes['name'] ); ?>.dialCode"></span>
            <input
                type="text"
                name="<?php echo esc_attr( $attributes['name'] ); ?>"
                id="<?php echo esc_attr( $attributes['name'] ); ?>"
                class="formgent-form-field__element"
                data-wp-interactive="formgent/form"
                data-wp-on--input="actions.updatePhoneNumber"
                data-wp-bind--value="context.data.<?php echo esc_attr( $attributes['name'] ); ?>.number"
            >
        </div>
       
    </div>
</div>
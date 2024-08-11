<?php defined( 'ABSPATH' ) || exit; ?>

<?php

// $countries = formgent_config( 'countries' );
// $flag_url  = formgent_url( 'assets/images/flags' );
?>
<pre>
<?php print_r( $attributes ); ?>
</pre>

<div class="formgent-form-field">
    <label for="<?php echo esc_html( $attributes['name'] ); ?>" class="formgent-form-field__label"><?php echo esc_html( $attributes['label'] ); ?></label>
    <div class="formgent-editor-block-list__single__wrapper formgent-editor-block-list__single__phone">
        <select 
            name="<?php echo esc_attr( $attributes['name'] ); ?>"
            id="<?php echo esc_attr( $attributes['name'] ); ?>"
            data-wp-init="callbacks.tomSelectInit"
            data-wp-on--change="actions.updateDialCode"
        >
        </select>
        <div className="formgent-editor-block-list__single__dialer__content">
            <span className="formgent-editor-block-list__single__dialer__code">
                (+880)
            </span>
            <input
                type="text"
                name="<?php echo esc_attr( $attributes['name'] ); ?>"
                id="<?php echo esc_attr( $attributes['name'] ); ?>"
                class="formgent-form-field__element"
                data-wp-interactive="formgent/form"
                data-wp-on--input="actions.updateNumber"
                data-wp-bind--value="context.data.<?php echo esc_attr( $attributes['name'] ); ?>"
            >
        </div>
       
    </div>
</div>
<?php defined( 'ABSPATH' ) || exit; ?>

<pre>
    <?php print_r( $attributes ); ?>
</pre>

<div class="formgent-form-field">
    <label for="<?php echo esc_html( $attributes['name'] ); ?>" class="formgent-form-field__label"><?php echo esc_html( $attributes['label'] ); ?></label>
    <input
        type="text"
        name="<?php echo esc_attr( $attributes['name'] ); ?>"
        id="<?php echo esc_attr( $attributes['name'] ); ?>"
        class="formgent-form-field__element"
        data-wp-interactive="formgent/form"
        data-wp-on--change="actions.updateNumber"
        data-wp-bind--value="context.data.<?php echo esc_attr( $attributes['name'] ); ?>"
    >
</div>

<div className="block-editor-block-list__single">
    <label
        className= "block-editor-block-list__single__label label-align-<?php echo esc_html( $attributes['label_alignment'] ); ?>"
    >
        <?php echo esc_attr( $attributes['label'] ); ?>
        <?php if ( esc_attr( $attributes['required'] ) ) : ?>
            <span class="block-editor-block-list__single__label__required">
                *
            </span>
        <?php endif; ?>

        { attributes.required ? (
            <span className="block-editor-block-list__single__label__required">
                *
            </span>
        ) : null }
    </label>
    <div className="block-editor-block-list__single__wrapper">
        <input
            className="block-editor-block-list__single__input block-editor-block-list__single__input--checkbox"
            type="checkbox"
            id={ attributes.id }
            name={ attributes.name }
            checked={ attributes.checked }
            onChange={ () => {} }
        />
        <span className="block-editor-block-list__single__sub-label">
            { attributes.sub_label }
        </span>
    </div>
</div>
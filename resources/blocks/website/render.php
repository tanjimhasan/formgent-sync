<?php defined( 'ABSPATH' ) || exit; ?>

<div className="block-editor-block-list__single">
    <label
        for="<?php echo esc_html( $attributes['name'] ); ?>"
        className= "block-editor-block-list__single__label label-align-<?php echo esc_html( $attributes['label_alignment'] ); ?>"
    >
        <?php if ( esc_html( $attributes['required'] ) ) : ?>
            <span class="block-editor-block-list__single__label__required">
                *
            </span>
        <?php endif; ?>
        <?php echo esc_attr( $attributes['label'] ); ?>
    </label>
    <div className="block-editor-block-list__single__wrapper">
        <input
            className="block-editor-block-list__single__input"
            type="url"
            name="<?php echo esc_attr( $attributes['name'] ); ?>"
            id="<?php echo esc_attr( $attributes['name'] ); ?>"
            placeholder="<?php echo esc_attr( $attributes['placeholder'] ); ?>"
            data-wp-interactive="formgent/form"
            data-wp-on--input="actions.updateNumber"
            data-wp-bind--value="context.data.<?php echo esc_attr( $attributes['name'] ); ?>"
        />
        <span className="block-editor-block-list__single__sub-label">
            <?php echo esc_attr( $attributes['sub_label'] ); ?>
        </span>
    </div>
</div>
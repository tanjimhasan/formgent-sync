<?php defined( 'ABSPATH' ) || exit; ?>

<div className="formgent-editor-block-list__single">
    <!-- <label
        className= "formgent-editor-block-list__single__label formgent-label-align-<?php echo esc_html( $attributes['label_alignment'] ); ?>"
    >
        <?php //echo esc_attr( $attributes['label'] ); ?>
    </label> -->
    <div className="formgent-editor-block-list__single__wrapper">
        <input
            className="formgent-editor-block-list__single__input formgent-editor-block-list__single__input--checkbox"
            type="checkbox"
            id="<?php echo esc_html( $attributes['id'] ); ?>"
            name="<?php echo esc_html( $attributes['name'] ); ?>"
            data-wp-interactive="formgent/form"
            data-wp-on--click="actions.updateGdpr"
            data-wp-bind--checked="context.data.<?php echo esc_attr( $attributes['name'] ); ?>"
        />
        <label className="formgent-editor-block-list__single__sub-label" for="<?php echo esc_html( $attributes['id'] ); ?>">
            <?php echo esc_html( $attributes['description'] ); ?>
        </label>
    </div>
</div>
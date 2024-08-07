<?php defined( 'ABSPATH' ) || exit; ?>

<div className="block-editor-block-list__single">
    <label
        className= "block-editor-block-list__single__label label-align-<?php echo esc_html( $attributes['label_alignment'] ); ?>"
    >
        <?php echo esc_attr( $attributes['label'] ); ?>
    </label>
    <div className="block-editor-block-list__single__wrapper">
        <input
            className="block-editor-block-list__single__input block-editor-block-list__single__input--checkbox"
            type="checkbox"
            id="<?php echo esc_html( $attributes['id'] ); ?>"
            name="<?php echo esc_html( $attributes['name'] ); ?>"
            checked="<?php echo esc_html( $attributes['checked'] ); ?>"
        />
        <span className="block-editor-block-list__single__sub-label">
            <?php echo esc_html( $attributes['sub_label'] ); ?>
        </span>
    </div>
</div>
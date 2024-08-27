<?php defined( 'ABSPATH' ) || exit; ?>

<div class="formgent-editor-block-list__single formgent-editor-block-list__single--csr formgent-editor-block-align-<?php echo esc_attr( $attributes['label_alignment'] ); ?>">
    <label
        for="<?php echo esc_attr( $attributes['name'] ); ?>"
        class= "formgent-editor-block-list__single__label-container formgent-label-align-<?php echo esc_attr( $attributes['label_alignment'] ); ?>"
    >
        <?php formgent_render( wp_kses_post( $attributes['label'] ) ); ?>
        <?php if ( $attributes['required'] ) : ?>
            <span class="formgent-editor-block-list__single__label__required">
                *
            </span>
        <?php endif; ?>
    </label>
    <div class="formgent-editor-block-list__single__wrapper">
        <select
            class="formgent-editor-block-list__single__input formgent-editor-block-list__single__input--select" 
            name="<?php echo esc_attr( $attributes['name'] ); ?>"
            id="<?php echo esc_attr( $attributes['name'] ); ?>"
            data-wp-interactive="formgent/form"
            data-wp-on--change="actions.updateInput"
        >
            <?php if ( ! empty( $attributes['options'] ) && is_array( $attributes['options'] ) ) : ?>
                <?php foreach ( $attributes['options'] as $index => $option ) : ?>
                    <option 
                        value="<?php echo esc_attr( $option['value'] ); ?>"
                        <?php echo $attributes['value'] === $option['value'] ? "selected" : null; ?>
                    >
                        <?php echo esc_html( $option['label'] ); ?>
                    </option>
                <?php endforeach; ?>
            <?php else : ?>
                <option value="" selected disabled>Please select</option>
            <?php endif; ?>
        </select>

        <?php if ( ! empty( $attributes['sub_label'] ) ) : ?>
            <span class="formgent-editor-block-list__single__sub-label">
                <?php formgent_render( wp_kses_post( $attributes['sub_label'] ) ); ?>
            </span>
        <?php endif; ?>
    </div>
</div>
<?php

namespace NewForm\App\Widgets\Controls;

class Select extends \Elementor\Control_Select2 {
    public function get_type() {
        return 'newform-select';
    }

    public function get_default_value() {
        return '0';
    }

    public function content_template() {
        $control_uid = $this->get_control_uid();
        ?>
            <div class="elementor-control-field">
                <label for="<?php newform_render( $control_uid ); ?>" class="elementor-control-title">{{{ data.label }}}</label>
                <div class="elementor-control-input-wrapper elementor-control-unit-5">
                    <select id="<?php newform_render( $control_uid ); ?>" class="custom-control-select elementor-control-tag-area" style="width:100%" data-setting="{{ data.name }}">
                    </select>
                    <input type="hidden" class="saved-value" data-setting="{{ data.name }}">
                </div>
            </div>
        <?php
    }
}
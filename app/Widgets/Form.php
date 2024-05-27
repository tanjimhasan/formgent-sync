<?php

namespace NewForm\App\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

class Form extends Widget_Base {
    public static function get_type() {
        return 'widget';
    }

    public function get_name() {
        return 'new_forms';
    }

    public function get_title() {
        return 'New Forms';
    }

    public function get_keywords() {
        return [ 'form', 'forms', ];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __( 'New Form', 'newform' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'form_id',
            [
                'label'       => esc_html__( 'Select Form', 'newform' ),
                'label_block' => true,
                'type'        => 'newform-select',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();

        if ( '0' === $settings['form_id'] ) {
            return;
        }
        ?>
            <div class="newform newform-elementor-widget" data-form_id="<?php newform_render( $settings['form_id'] )?>">Selected Form Id is <?php newform_render( $settings['form_id'] ) ?></div>
        <?php
    }
}
<?php

namespace NewForm\App\Providers;

use NewForm\App\Models\Form;
use NewForm\WpMVC\Contracts\Provider;
use NewForm\WpMVC\View\View;

class ShortCodeServiceProvider implements Provider {
    public function boot() {
        add_action( 'init', [ $this, 'action_init' ] );
    }

    /**
     * Fires after WordPress has finished loading but before any headers are sent.
     */
    public function action_init() : void {
        add_shortcode( 'newform', [$this, 'content'] );
    }

    public function content( array $attributes ) {
        if ( empty( $attributes['form_id'] ) ) {
            return 'form_id is required.';
        }

        $form_id = intval( $attributes['form_id'] );
        $form    = Form::query()->select( '1' )->where( 'id', $form_id )->where( 'status', 'publish' )->get();

        if ( empty( $form ) ) {
            return;
        }

        return View::get( 'shortcode', compact( 'form_id' ) );
    }
}
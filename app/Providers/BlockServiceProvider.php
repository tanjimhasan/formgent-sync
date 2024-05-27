<?php

namespace NewForm\App\Providers;

use NewForm\WpMVC\Contracts\Provider;

class BlockServiceProvider implements Provider {
    public function boot() {
        add_action( 'init', [ $this, 'action_init' ] );
    }

    /**
     * Fires after WordPress has finished loading but before any headers are sent.
     */
    public function action_init() : void {
        register_block_type(
            'newform/form', [
                'editor_script' => 'newform/block/editor'
            ] 
        );
    }
}
<?php

namespace FormGent\App\Providers;

defined( 'ABSPATH' ) || exit;

use FormGent\WpMVC\Contracts\Provider;

class BlockServiceProvider implements Provider {
    public function boot() {
        add_action( 'init', [ $this, 'action_init' ] );
    }

    /**
     * Fires after WordPress has finished loading but before any headers are sent.
     */
    public function action_init() : void {
        foreach ( formgent_config( 'blocks' ) as $block_name => $block_data ) {
            $name = ltrim( $block_name, 'formgent' );

            wp_enqueue_block_style(
                $block_name, [
                    'handle' => 'formgent/blocks-frontend',
                    'src'    => formgent_url( 'assets/build/css/blocks-frontend.css' )
                ]
            );

            register_block_type(
                formgent_dir( "assets/build{$name}/block.json" ), [
                    'render_callback' => function( $attributes ) use( $name ) {
                        ob_start();
                        include formgent()->get_dir( "resources/blocks{$name}/render.php" );
                        return ob_get_clean();
                    }
                ]
            );
        }
    }
}
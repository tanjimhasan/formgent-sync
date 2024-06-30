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
            register_block_type(
                "formgent/{$block_name}", [
                    'editor_script'   => 'formgent/block/editor',
                    'editor_style'    => 'formgent/block/editor',
                    'script'          => 'formgent/block/frontend',
                    'style'           => 'formgent/block/frontend',
                    'title'           => $block_data['title'],
                    'render_callback' => function( $attributes ) use( $block_name ) {
                        ob_start();
                        include formgent()->get_dir( "resources/blocks/{$block_name}/render.php" );
                        return ob_get_clean();
                    },
                    'attributes'      => [
                        'formId' => [
                            'type'    => 'string',
                            'default' => '0',
                        ]
                    ],
                ]
            );
        }
    }
}
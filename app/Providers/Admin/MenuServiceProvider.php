<?php

namespace FormGent\App\Providers\Admin;

use FormGent\WpMVC\Contracts\Provider;
use FormGent\WpMVC\View\View;

class MenuServiceProvider implements Provider
{
    public $pro_url = 'https://wpwax.com/formgent';

    public function boot() {
        add_action( 'admin_menu', [$this, 'action_admin_menu'] );
        add_action( 'admin_head', [ $this, 'action_admin_head' ] );
    }

    /**
     * Loading menu activation js code only formgent admin page
     */
    public function action_admin_head() : void {
        ?>
        <style>
            .wp-submenu-wrap a[href="<?php formgent_render( $this->pro_url )?>"] {
                color: #f06060 !important;
                font-weight: bold;
            }
        </style>

        <?php
        if ( 'formgent_page_formgent' === get_current_screen()->id ) {
            View::render( 'admin/menu-js', ['pro_url' => $this->pro_url] );
        }
    }

    public function action_admin_menu() {
        $page_url = admin_url( 'admin.php?page=formgent' );
        add_menu_page( esc_html__( 'New From', 'formgent' ), esc_html__( 'FormGent', 'formgent' ), 'manage_options', 'formgent-menu', function () { }, '', 5 );
        add_submenu_page( 'formgent-menu', esc_html__( 'All Forms', 'formgent' ), esc_html__( 'All Forms', 'formgent' ), 'manage_options', 'formgent', [$this, 'content'] );
        add_submenu_page( 'formgent-menu', esc_html__( 'Settings', 'formgent' ), esc_html__( 'Settings', 'formgent' ), 'manage_options', $page_url . '#/settings' );
        if ( ! function_exists( 'formgent_pro' ) ) {
            add_submenu_page( 'formgent-menu', esc_html__( 'Go Pro', 'formgent' ), esc_html__( 'Go Pro', 'formgent' ), 'manage_options', $this->pro_url );
        }

        remove_submenu_page( 'formgent-menu', 'formgent-menu' );
    }

    public function content() {
        formgent_render( '<div class="formgent-root"></div>' );
    }
}
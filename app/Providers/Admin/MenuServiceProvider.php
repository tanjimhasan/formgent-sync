<?php

namespace NewForm\App\Providers\Admin;

use NewForm\WpMVC\Contracts\Provider;
use NewForm\WpMVC\View\View;

class MenuServiceProvider implements Provider
{
    public $pro_url = 'https://wpwax.com/newform';

    public function boot() {
        add_action( 'admin_menu', [$this, 'action_admin_menu'] );
        add_action( 'admin_head', [ $this, 'action_admin_head' ] );
    }

    /**
     * Loading menu activation js code only newform admin page
     */
    public function action_admin_head() : void {
        ?>
        <style>
            .wp-submenu-wrap a[href="<?php newform_render( $this->pro_url )?>"] {
                color: #f06060 !important;
                font-weight: bold;
            }
        </style>

        <?php
        if ( 'new-form_page_newform' === get_current_screen()->id ) {
            View::render( 'admin/menu-js', ['pro_url' => $this->pro_url] );
        }
    }

    public function action_admin_menu() {
        $page_url = admin_url( 'admin.php?page=newform' );
        add_menu_page( esc_html__( 'New From', 'newform' ), esc_html__( 'New Form', 'newform' ), 'manage_options', 'newform-menu', function () { }, '', 5 );
        add_submenu_page( 'newform-menu', esc_html__( 'All Forms', 'newform' ), esc_html__( 'All Forms', 'newform' ), 'manage_options', 'newform', [$this, 'content'] );
        add_submenu_page( 'newform-menu', esc_html__( 'Settings', 'newform' ), esc_html__( 'Settings', 'newform' ), 'manage_options', $page_url . '#/settings' );
        if ( ! function_exists( 'newform_pro' ) ) {
            add_submenu_page( 'newform-menu', esc_html__( 'Go Pro', 'newform' ), esc_html__( 'Go Pro', 'newform' ), 'manage_options', $this->pro_url );
        }

        remove_submenu_page( 'newform-menu', 'newform-menu' );
    }

    public function content() {
        newform_render( '<div class="newform-root"></div>' );
    }
}
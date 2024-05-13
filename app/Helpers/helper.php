<?php

defined( 'ABSPATH' ) || exit;

use NewForm\WpMVC\App;
use NewForm\DI\Container;

function newform():App {
    return App::$instance;
}

function newform_config( string $config_key ) {
    return newform()::$config->get( $config_key );
}

function newform_app_config( string $config_key ) {
    return newform_config( "app.{$config_key}" );
}

function newform_version() {
    return newform_app_config( 'version' );
}

function newform_container():Container {
    return newform()::$container;
}

function newform_singleton( string $class ) {
    return newform_container()->get( $class );
}

function newform_url( string $url = '' ) {
    return newform()->get_url( $url );
}

function newform_dir( string $dir = '' ) {
    return newform()->get_dir( $dir );
}

function newform_render( string $content ) {
    //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    echo $content;
}
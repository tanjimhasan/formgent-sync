<?php

defined( 'ABSPATH' ) || exit;

use NewForm\WpMVC\App;
use NewForm\DI\Container;
use NewForm\App\Fields\Field;
use NewForm\App\Fields\ShortText;
use NewForm\App\Utils\DateTime;

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

function newform_make( string $class ) {
    return newform_container()->make( $class );
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

function newform_date_time_format() {
    return apply_filters( 'newform_date_time_format', 'Y-m-d H:i:s' );
}

function newform_now() {
    return DateTime::now();
}

function newform_is_valid_date( string $date, string $format ) {
    $date_time = \DateTime::createFromFormat( $format, $date );
    return $date_time && $date_time->format( $format ) === $date;
}

function newform_get_entry_allowed_fields() {
    return apply_filters( 'newform_entry_allowed_fields', [ShortText::get_key()] );
}

/**
 * Get current user ip address
 *
 * @return string|null
 */
function newform_get_user_ip_address() {
    // Check for shared Internet/ISP IP
    if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) && filter_var( $_SERVER['HTTP_CLIENT_IP'], FILTER_VALIDATE_IP ) ) { //phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash
        return sanitize_text_field( wp_unslash( $_SERVER['HTTP_CLIENT_IP'] ) );
    }

    // Check for IP addresses passed by proxies
    if ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) { //phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash
        // Extract IP addresses
        $ip_addresses = explode(
            ',', sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ) )
        );

        // Check each IP address
        foreach ( $ip_addresses as $ip ) {
            $ip = trim( $ip );
            if ( filter_var( $ip, FILTER_VALIDATE_IP ) ) {
                return $ip;
            }
        }
    }

    // Check for the remote IP address
    if ( ! empty( $_SERVER['REMOTE_ADDR'] ) && filter_var( $_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP ) ) { //phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash
        return sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) );
    }

    return null;
}

/**
 * Get value form nested array
 *
 * @param string $keys Comma separated array keys
 * @param array $values
 * @param mixed $default
 * @return mixed
 */
function newform_get_nested_value( string $keys, array $values, $default = null ) {
    $keys = explode( '.', $keys );

    $item = $values;

    foreach ( $keys as $key ) {
        if ( ! isset( $item[ $key ] ) ) {
            return $default;
        }
        $item = $item[$key];
    }
    return $item;
}

function newform_field_handler( string $field_type ):Field {
    $field_handler_class = newform_config( "fields.{$field_type}" );

    if ( ! class_exists( $field_handler_class ) ) {
        throw new Exception( __( 'Field handler not found.' ), 500 );
    }

    $field_handler = newform_make( $field_handler_class );

    if ( ! $field_handler instanceof Field ) {
        throw new Exception( __( 'Please use a valid field handler.' ), 500 );
    }

    return $field_handler;
}
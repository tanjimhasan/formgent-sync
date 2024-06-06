<?php

defined( 'ABSPATH' ) || exit;

use FormGent\WpMVC\App;
use FormGent\DI\Container;
use FormGent\App\Fields\Field;
use FormGent\App\Fields\Name\Name;
use FormGent\App\Fields\ShortText\ShortText;
use FormGent\App\Fields\LongText\LongText;
use FormGent\App\Utils\DateTime;
use FormGent\App\Repositories\EntryRepository;
use FormGent\App\Repositories\FormMetaRepository;

function formgent():App {
    return App::$instance;
}

function formgent_config( string $config_key ) {
    return formgent()::$config->get( $config_key );
}

function formgent_app_config( string $config_key ) {
    return formgent_config( "app.{$config_key}" );
}

function formgent_version() {
    return formgent_app_config( 'version' );
}

function formgent_container():Container {
    return formgent()::$container;
}

function formgent_make( string $class ) {
    return formgent_container()->make( $class );
}

function formgent_singleton( string $class ) {
    return formgent_container()->get( $class );
}

function formgent_url( string $url = '' ) {
    return formgent()->get_url( $url );
}

function formgent_dir( string $dir = '' ) {
    return formgent()->get_dir( $dir );
}

function formgent_render( string $content ) {
    //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    echo $content;
}

function formgent_date_time_format() {
    return apply_filters( 'formgent_date_time_format', 'Y-m-d H:i:s' );
}

function formgent_now() {
    return DateTime::now();
}

function formgent_is_valid_date( string $date, string $format ) {
    $date_time = \DateTime::createFromFormat( $format, $date );
    return $date_time && $date_time->format( $format ) === $date;
}

function formgent_get_entry_allowed_fields() {
    return apply_filters( 'formgent_entry_allowed_fields', [ShortText::get_key(), LongText::get_key(), Name::get_key()] );
}

/**
 * Get current user ip address
 *
 * @return string|null
 */
function formgent_get_user_ip_address() {
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
function formgent_get_nested_value( string $keys, array $values, $default = null ) {
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

function formgent_field_handler( string $field_type ):Field {
    $field_handler_class = formgent_config( "fields.{$field_type}" );

    if ( ! class_exists( $field_handler_class ) ) {
        throw new Exception( __( 'Field handler not found.', 'formgent' ), 500 );
    }

    $field_handler = formgent_make( $field_handler_class );

    if ( ! $field_handler instanceof Field ) {
        throw new Exception( __( 'Please use a valid field handler.', 'formgent' ), 500 );
    }

    return $field_handler;
}

function formgent_is_one_level_array( array $array ) {
    foreach ( $array as $value ) {
        if ( is_array( $value ) ) {
            return false; // Contains nested array
        }
    }
    return true; // Valid one-level array
}

function formgent_generate_token() {
    $time   = microtime( true );
    $random = bin2hex( random_bytes( 5 ) );
    $token  = $random . $time;
    return $token;
}

function formgent_get_entry_by_token( string $token, int $form_id ) {
    /**
     * @var FormMetaRepository $form_meta_repository
     */
    $form_meta_repository = formgent_singleton( FormMetaRepository::class );
    $response_id          = $form_meta_repository->get_meta_value( $form_id, $token );

    /**
     * @var EntryRepository $entry_repository
     */
    $entry_repository = formgent_singleton( EntryRepository::class );
    return $entry_repository->get_by_id( $response_id );
}

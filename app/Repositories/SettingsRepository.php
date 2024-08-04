<?php

namespace FormGent\App\Repositories;

defined( 'ABSPATH' ) || exit;

class SettingsRepository {
    protected array $settings = [];

    public function save( array $settings ) {
        return update_option( 'formgent-settings', map_deep( $settings, 'sanitize_text_field' ) );
    }

    public function get() {
        return get_option( 'formgent-settings', [] );
    }

    public function get_by_key( string $key, $default = null ) {
        $settings = $this->get();
        return isset( $settings[$key] ) ? $settings[$key] : $default;
    }

    public function update_setting( string $key, $value ) {
        if ( is_array( $value ) ) {
            $value = map_deep( $value, 'sanitize_text_field' );
        } else {
            $value = sanitize_text_field( $value );
        }

        $key            = sanitize_text_field( $key );
        $settings       = $this->get();
        $settings[$key] = $value;

        return $this->save( $settings );
    }
}

<?php

defined( 'ABSPATH' ) || exit;

function formgent_form_default_values_functions() {
    return apply_filters(
        'formgent_default_values_functions', [
            'ip' => function() {
                return formgent_get_user_ip_address();
            }
        ]
    );
}

function formgent_form_default_values( array $data ) {
    $values_functions = formgent_form_default_values_functions();
    $dynamic_values   = [];
    
    return array_map(
        function( $item ) use( $values_functions, $dynamic_values ) {
            if ( empty( $item['value'] ) ) {
                return '';
            }
    
            $value = $item['value'];

            preg_match_all( '/\{(.*?)\}/', $value, $matches );
    
            foreach ( $matches[1] as $key => $variable ) {
                if ( empty( $values_functions[$variable] ) || ! is_callable( $values_functions[$variable] ) ) {
                    continue;
                }
    
                if ( isset( $dynamic_values[$variable] ) ) {
                    $value = str_replace( $matches[0][$key], $dynamic_values[$variable], $value );
                } else {
                    $dynamic_value             = $values_functions[$variable]();
                    $dynamic_values[$variable] = $dynamic_value;
                    $value                     = str_replace( $matches[0][$key], $dynamic_value, $value );
                }
            }
            return $value;
        }, $data
    );
}
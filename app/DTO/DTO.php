<?php

namespace FormGent\App\DTO;

defined( 'ABSPATH' ) || exit;

use ReflectionClass;

abstract class DTO {
    public function is_initialized( string $property ): bool {
        $reflection = new ReflectionClass( $this );

        if ( ! $reflection->hasProperty( $property ) ) {
            return false;
        }
        
        $prop = $reflection->getProperty( $property );
        $prop->setAccessible( true );
        
        return $prop->isInitialized( $this );
    }
    
    public function to_array( bool $with_id = false ) {
        $reflection = new ReflectionClass( $this );
        $values     = [];

        foreach ( $reflection->getProperties() as $property ) {
            $property_name = $property->getName();
            if ( ! $with_id && 'id' === $property_name ) {
                continue;
            }
            $values[$property_name] = $this->{"get_{$property_name}"}();
        }

        return $values;
    }
}
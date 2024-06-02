<?php

namespace FormGent\App\DTO;

class FormMetaUpdateDTO extends DTO {

    private int $id;

    private string $meta_value;

    public function get_id(): int {
        return $this->id;
    }
    
    public function set_id( int $id ): void {
        $this->id = $id;
    }

    public function get_meta_value(): string {
        return $this->meta_value;
    }
    
    public function set_meta_value( string $meta_value ): void {
        $this->meta_value = $meta_value;
    }
}
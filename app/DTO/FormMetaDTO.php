<?php

namespace FormGent\App\DTO;

class FormMetaDTO extends DTO {

    private int $id;

    private int $form_id;

    private string $meta_key;

    private string $meta_value;

    public function get_id(): int {
        return $this->id;
    }
    
    public function set_id( int $id ): void {
        $this->id = $id;
    }

    public function get_form_id(): int {
        return $this->form_id;
    }
    
    public function set_form_id( int $form_id ): void {
        $this->form_id = $form_id;
    }

    public function get_meta_key(): string {
        return $this->meta_key;
    }
    
    public function set_meta_key( string $meta_key ): void {
        $this->meta_key = $meta_key;
    }

    public function get_meta_value(): string {
        return $this->meta_value;
    }
    
    public function set_meta_value( string $meta_value ): void {
        $this->meta_value = $meta_value;
    }
}
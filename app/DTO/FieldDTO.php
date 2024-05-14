<?php

namespace NewForm\App\DTO;

class FieldDTO {
    private $title;

    public function get_title() {
        return $this->title;
    }

    public function set_title( $title ) {
        $this->title = $title;
    }
}
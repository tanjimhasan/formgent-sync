<?php

namespace FormGent\App\DTO;

class FormMetaUpdateDTO extends DTO {
    private int $id;

    private string $meta_value;

    /**
     * Get the value of id
     *
     * @return int
     */
    public function get_id() {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @param int $id 
     *
     * @return self
     */
    public function set_id( int $id ) {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of meta_value
     *
     * @return string
     */
    public function get_meta_value() {
        return $this->meta_value;
    }

    /**
     * Set the value of meta_value
     *
     * @param string $meta_value 
     *
     * @return self
     */
    public function set_meta_value( string $meta_value ) {
        $this->meta_value = $meta_value;

        return $this;
    }
}
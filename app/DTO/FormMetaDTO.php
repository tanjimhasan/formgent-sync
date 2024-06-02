<?php

namespace FormGent\App\DTO;

class FormMetaDTO extends DTO {
    private int $id;

    private int $form_id;

    private string $meta_key;

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
     * Get the value of form_id
     *
     * @return int
     */
    public function get_form_id() {
        return $this->form_id;
    }

    /**
     * Set the value of form_id
     *
     * @param int $form_id 
     *
     * @return self
     */
    public function set_form_id( int $form_id ) {
        $this->form_id = $form_id;

        return $this;
    }

    /**
     * Get the value of meta_key
     *
     * @return string
     */
    public function get_meta_key() {
        return $this->meta_key;
    }

    /**
     * Set the value of meta_key
     *
     * @param string $meta_key 
     *
     * @return self
     */
    public function set_meta_key( string $meta_key ) {
        $this->meta_key = $meta_key;

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
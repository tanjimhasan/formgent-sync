<?php

namespace FormGent\App\DTO;

class FieldDTO extends DTO {
    private int $id;

    private int $entry_id = 0;

    private int $form_id;

    private string $field_id;

    private ?string $value = null;

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
     * Get the value of entry_id
     *
     * @return int
     */
    public function get_entry_id() {
        return $this->entry_id;
    }

    /**
     * Set the value of entry_id
     *
     * @param int $entry_id 
     *
     * @return self
     */
    public function set_entry_id( int $entry_id ) {
        $this->entry_id = $entry_id;

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
     * Get the value of field_id
     *
     * @return string
     */
    public function get_field_id() {
        return $this->field_id;
    }

    /**
     * Set the value of field_id
     *
     * @param string $field_id 
     *
     * @return self
     */
    public function set_field_id( string $field_id ) {
        $this->field_id = $field_id;

        return $this;
    }

    /**
     * Get the value of value
     *
     * @return string
     */
    public function get_value() {
        return $this->value;
    }

    /**
     * Set the value of value
     *
     * @param string $value 
     *
     * @return self
     */
    public function set_value( string $value ) {
        $this->value = $value;

        return $this;
    }
}
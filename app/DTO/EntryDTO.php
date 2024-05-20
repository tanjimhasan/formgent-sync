<?php

namespace NewForm\App\DTO;

class EntryDTO extends DTO {
    private int $id;

    private int $form_id;

    private int $is_read = 0;

    private string $ip;

    private int $created_by;

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
     * Get the value of is_read
     *
     * @return int
     */
    public function get_is_read() {
        return $this->is_read;
    }

    /**
     * Set the value of is_read
     *
     * @param int $is_read 
     *
     * @return self
     */
    public function set_is_read( int $is_read ) {
        $this->is_read = $is_read;

        return $this;
    }

    /**
     * Get the value of ip
     *
     * @return string
     */
    public function get_ip() {
        return $this->ip;
    }

    /**
     * Set the value of ip
     *
     * @param string $ip 
     *
     * @return self
     */
    public function set_ip( string $ip ) {
        $this->ip = $ip;

        return $this;
    }

    /**
     * Get the value of created_by
     *
     * @return int
     */
    public function get_created_by() {
        return $this->created_by;
    }

    /**
     * Set the value of created_by
     *
     * @param int $created_by 
     *
     * @return self
     */
    public function set_created_by( int $created_by ) {
        $this->created_by = $created_by;

        return $this;
    }
}
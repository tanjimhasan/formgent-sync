<?php

namespace FormGent\App\DTO;

defined( 'ABSPATH' ) || exit;

class ResponseReadDTO extends DTO {
    private int $page;

    private int $per_page;

    private ?int $form_id = null;

    private ?int $is_read = null;

    private ?string $search = null;

    private ?string $sort_by = null;

    private ?string $date_type = null;

    private array $date_frame = [];

    /**
     * Get the value of page
     *
     * @return int
     */
    public function get_page() {
        return $this->page;
    }

    /**
     * Set the value of page
     *
     * @param int $page 
     *
     * @return self
     */
    public function set_page( int $page ) {
        $this->page = $page;

        return $this;
    }

    /**
     * Get the value of per_page
     *
     * @return int
     */
    public function get_per_page() {
        return $this->per_page;
    }

    /**
     * Set the value of per_page
     *
     * @param int $per_page 
     *
     * @return self
     */
    public function set_per_page( int $per_page ) {
        $this->per_page = $per_page;

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
     * Get the value of search
     *
     * @return string
     */
    public function get_search() {
        return $this->search;
    }

    /**
     * Set the value of search
     *
     * @param string $search 
     *
     * @return self
     */
    public function set_search( string $search ) {
        $this->search = $search;

        return $this;
    }

    /**
     * Get the value of sort_by
     *
     * @return string
     */
    public function get_sort_by() {
        return $this->sort_by;
    }

    /**
     * Set the value of sort_by
     *
     * @param string $sort_by 
     *
     * @return self
     */
    public function set_sort_by( string $sort_by ) {
        $this->sort_by = $sort_by;

        return $this;
    }

    /**
     * Get the value of date_type
     *
     * @return string
     */
    public function get_date_type() {
        return $this->date_type;
    }

    /**
     * Set the value of date_type
     *
     * @param string $date_type 
     *
     * @return self
     */
    public function set_date_type( string $date_type ) {
        $this->date_type = $date_type;

        return $this;
    }

    /**
     * Get the value of date_frame
     *
     * @return array
     */
    public function get_date_frame() {
        return $this->date_frame;
    }

    /**
     * Set the value of date_frame
     *
     * @param array $date_frame 
     *
     * @return self
     */
    public function set_date_frame( array $date_frame ) {
        $this->date_frame = $date_frame;

        return $this;
    }
}
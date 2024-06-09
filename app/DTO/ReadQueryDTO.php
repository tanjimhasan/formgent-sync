<?php

namespace FormGent\App\DTO;

defined( 'ABSPATH' ) || exit;

trait ReadQueryDTO {
    private int $per_page = 10;

    private int $page = 1;

    private string $order_by = 'latest';

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
     * Get the value of order_by
     *
     * @return string
     */
    public function get_order_by() {
        return $this->order_by;
    }

    /**
     * Set the value of order_by
     *
     * @param string $order_by 
     *
     * @return self
     */
    public function set_order_by( string $order_by ) {
        $this->order_by = $order_by;

        return $this;
    }
}
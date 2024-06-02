<?php

namespace FormGent\App\DTO;

trait ReadQueryDTO {
    private int $per_page = 10;

    private int $page = 1;

    private string $order_by = 'latest';

    public function get_per_page(): int {
        return $this->per_page;
    }
    
    public function set_per_page( int $per_page ): void {
        $this->per_page = $per_page;
    }

    public function get_page(): int {
        return $this->page;
    }
    
    public function set_page( int $page ): void {
        $this->page = $page;
    }

    public function get_order_by(): string {
        return $this->order_by;
    }
    
    public function set_order_by( string $order_by ): void {
        $this->order_by = $order_by;
    }
}
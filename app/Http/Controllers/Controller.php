<?php

namespace NewForm\App\Http\Controllers;

abstract class Controller {
    protected function pagination( string $path, int $total_items, int $per_page = 10 ) {
        $params       = $this->get_query_params();
        $current_page = intval( $params['page'] ) ?? 1;
        $per_page     = $params['per_page'] ?? $per_page;
        $total_pages  = ceil( $total_items / $per_page );
        $rest_url     = get_rest_url( null, $path );

        return [
            'pagination' => [
                'total_items'  => $total_items,
                'total_pages'  => $total_pages,
                'current_page' => $current_page,
            ],
            'links'      => [
                'prev' => $this->get_prev_link( $params, $rest_url ),
                'self' =>  add_query_arg( $params, $rest_url ),
                'next' => $this->get_next_link( $params, $rest_url, $total_pages )
            ]
        ];
    }

    protected function get_query_params() {
        parse_str( $_SERVER['QUERY_STRING'], $params );
        return $params;
    }

    private function get_next_link( array $args, string $rest_url, int $total_pages = 20 ) {
        $page = intval( $args['page'] ) ?? 1;

        if ( $total_pages <= $page ) {
            return null;
        }
    
        $args['page'] = $page  + 1;

        return add_query_arg( $args, $rest_url ); 
    }

    private function get_prev_link( array $args, string $rest_url ) {
        if ( empty( $args['page'] ) || 1 == $args['page'] ) {
            return null;
        }
        
        $args['page'] -= 1;

        return add_query_arg( $args, $rest_url ); 
    }
}
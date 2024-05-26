<?php

namespace NewForm\App\Http\Controllers\Admin;

use NewForm\App\DTO\EntryReadDTO;
use NewForm\App\Http\Controllers\Controller;
use NewForm\App\Repositories\EntryRepository;
use NewForm\WpMVC\RequestValidator\Validator;
use WP_REST_Request;
use NewForm\WpMVC\Routing\Response;

class EntryController extends Controller {
    public EntryRepository $repository;

    public function __construct( EntryRepository $repository ) {
        $this->repository = $repository;
    } 

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'per_page' => 'numeric',
                'page'     => 'numeric',
                's'        => 'string|max:255',
                'form_id'  => 'numeric',
                // 'date_type'  => 'string|accepted:all,today,yesterday,last_week,last_month,date_frame',
                // 'sort_by'    => 'string|accepted:last_modified,date_created,alphabetical,last_submission,unread,draft,publish',
                // 'date_frame' => 'array'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $dto = new EntryReadDTO;
        $dto->set_page( intval( $wp_rest_request->get_param( 'page' ) ) );
        $dto->set_per_page( intval( $wp_rest_request->get_param( 'per_page' ) ) );
        $dto->set_search( (string) $wp_rest_request->get_param( 's' ) );

        if ( $wp_rest_request->has_param( 'form_id' ) ) {
            $dto->set_form_id( intval( $wp_rest_request->get_param( 'form_id' ) ) );
        }

        // if ( $wp_rest_request->has_param( 'sort_by' ) ) {
        //     $dto->set_sort_by( $wp_rest_request->get_param( 'sort_by' ) );
        // }

        // if ( $wp_rest_request->has_param( 'date_type' ) ) {
        //     $dto->set_date_type( $wp_rest_request->get_param( 'date_type' ) );
        // }

        // if ( $wp_rest_request->has_param( 'date_type' ) ) {
        //     $dto->set_date_type( $wp_rest_request->get_param( 'date_type' ) );
        // }

        $data                = $this->repository->get( $dto );
        $response            = $this->pagination( $wp_rest_request, $data['total'], $dto->get_per_page() );
        $response['entries'] = $data['entries'];

        return Response::send( $response );
    }
}
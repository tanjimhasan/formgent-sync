<?php

namespace FormGent\App\Http\Controllers\Admin;

defined( 'ABSPATH' ) || exit;

use Exception;
use FormGent\App\Http\Controllers\Controller;
use FormGent\App\Repositories\ResponseRepository;
use FormGent\App\Repositories\SummaryRepository;
use FormGent\WpMVC\Routing\Response;
use WP_REST_Request;
use FormGent\WpMVC\RequestValidator\Validator;

class SummaryController extends Controller {
    public SummaryRepository $summary_repository;

    public ResponseRepository $response_repository;

    public function __construct( SummaryRepository $summary_repository, ResponseRepository $response_repository ) {
        $this->summary_repository  = $summary_repository;
        $this->response_repository = $response_repository;
    }

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'         => 'required|numeric',
                'field_id'   => 'required|string',
                'field_type' => 'required|string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        try {
            return Response::send(
                $this->summary_repository->get( 
                    intval( $wp_rest_request->get_param( 'id' ) ), 
                    $wp_rest_request->get_param( 'field_id' ),
                    $wp_rest_request->get_param( 'field_type' ) ,
                    intval( $wp_rest_request->get_param( 'page' ) ),
                    intval( $wp_rest_request->get_param( 'per_page' ) )
                )
            );
        } catch ( Exception $e ) {
            return Response::send(
                [
                    'message' => $e->getMessage()
                ], $e->getCode()
            );
        }
    }

    public function field( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id' => 'required|numeric'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $form_id = intval( $wp_rest_request->get_param( 'id' ) );

        try {
            return Response::send(
                [
                    'fields' => $this->summary_repository->get_fields( $form_id ),
                ]
            );
        } catch ( Exception $e ) {
            return Response::send(
                [
                    'message' => $e->getMessage()
                ], $e->getCode()
            );
        }
    }
}
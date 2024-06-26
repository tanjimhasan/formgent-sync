<?php

namespace FormGent\App\Http\Controllers\Admin;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Http\Controllers\Controller;
use FormGent\App\Repositories\ResponseRepository;
use FormGent\App\Repositories\FormMetaRepository;

use FormGent\WpMVC\Routing\Response;
use FormGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

class AnalyticsController extends Controller {
    public ResponseRepository $response_repository;

    public FormMetaRepository $form_meta_repository;
    
    public function __construct( ResponseRepository $response_repository, FormMetaRepository $form_meta_repository ) {
        $this->response_repository  = $response_repository;
        $this->form_meta_repository = $form_meta_repository;
    }

    public function form_summary( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'form_id' => 'numeric',
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $summary = $this->response_repository->get_summary( $wp_rest_request->get_param( 'form_id' ) );
        $summary = apply_filters( 'formgent_form_summary', $summary, $wp_rest_request );

        return Response::send( [ 'summary' => $summary ] );
    }
}
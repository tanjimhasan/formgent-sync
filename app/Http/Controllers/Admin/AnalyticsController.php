<?php

namespace FormGent\App\Http\Controllers\Admin;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Http\Controllers\Controller;
use FormGent\App\Repositories\AnalyticRepository;

use FormGent\WpMVC\Routing\Response;
use FormGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;

class AnalyticsController extends Controller {
    public AnalyticRepository $analytic_repository;
    
    public function __construct( AnalyticRepository $analytic_repository ) {
        $this->analytic_repository = $analytic_repository;
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

        $summary = $this->analytic_repository->form_summary( $wp_rest_request->get_param( 'form_id' ) );
        $summary = apply_filters( 'formgent_form_summary', $summary, $wp_rest_request );

        return Response::send( [ 'summary' => $summary ] );
    }
}
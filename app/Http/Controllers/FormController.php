<?php

namespace FormGent\App\Http\Controllers;
use Exception;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Http\Controllers\Controller;
use FormGent\App\Repositories\FormRepository;
use FormGent\App\Repositories\FormMetaRepository;
use FormGent\WpMVC\RequestValidator\Validator;
use FormGent\WpMVC\Routing\Response;
use WP_REST_Request;

class FormController extends Controller {
    public FormRepository $form_repository;

    public FormMetaRepository $form_meta_repository;

    public function __construct( FormRepository $form_repository, FormMetaRepository $form_meta_repository ) {
        $this->form_repository      = $form_repository;
        $this->form_meta_repository = $form_meta_repository;
    }

    public function show( Validator $validator, WP_REST_Request $wp_rest_request ) {
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

        $form = $this->form_repository->get_by_id( intval( $wp_rest_request->get_param( 'id' ) ) );

        if ( ! $form ) {
            return Response::send(
                [
                    'message' => esc_html__( 'Form not found', 'formgent' )
                ], 404
            );
        }

        return Response::send(
            [
                'form' => $form
            ]
        );
    }

    public function increment_view_count( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $wp_rest_request->set_param( 'count', 1 );
        $wp_rest_request->set_param( 'type', '+' );

        return $this->update_view_count( $validator, $wp_rest_request );
    }

    public function update_view_count( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'    => 'required|numeric',
                'count' => 'required|numeric',
                'type'  => 'string|accepted:=,+,-',
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $type = $wp_rest_request->get_param( 'type' );
        $type = $type ? $type : '=';

        try {
            $new_count = $this->form_meta_repository->update_view_count( 
                absint( $wp_rest_request->get_param( 'id' ) ), 
                absint( $wp_rest_request->get_param( 'count' ) ),
                $type
            );

            return Response::send(
                [
                    'new_count' => $new_count
                ]
            );

        } catch ( Exception $e ) {
            return Response::send(
                [
                    'messages' => esc_html__( 'Could\'t update the view count', 'formgent' )
                ], 422
            );
        }
    }
}
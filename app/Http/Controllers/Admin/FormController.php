<?php

namespace NewForm\App\Http\Controllers\Admin;

use Exception;
use NewForm\App\DTO\FormDTO;
use NewForm\App\DTO\FormReadDTO;
use NewForm\App\Http\Controllers\Controller;
use NewForm\App\Repositories\FormRepository;
use NewForm\WpMVC\RequestValidator\Validator;
use NewForm\WpMVC\Routing\Response;
use WP_REST_Request;

class FormController extends Controller {
    public FormRepository $form_repository;

    public function __construct( FormRepository $form_repository ) {
        $this->form_repository = $form_repository;
    }

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'per_page' => 'numeric',
                'page'     => 'numeric',
                's'        => 'string|max:255',
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $dto = new FormReadDTO;
        $dto->set_page( intval( $wp_rest_request->get_param( 'page' ) ) );
        $dto->set_per_page( intval( $wp_rest_request->get_param( 'per_page' ) ) );
        $dto->set_search( (string) $wp_rest_request->get_param( 's' ) );

        $data              = $this->form_repository->get( $dto );
        $response          = $this->pagination( 'new-form/admin/form', $data['total'], $dto->get_per_page() );
        $response['forms'] = $data['forms'];

        return Response::send( $response );
    }

    public function store( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'title'   => 'required|string|max:255|min:5',
                'status'  => 'required|string|accepted:publish,draft',
                'content' => 'required|json'
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
            $dto = new FormDTO;

            $dto->set_title( $wp_rest_request->get_param( 'title' ) );
            $dto->set_status( $wp_rest_request->get_param( 'status' ) );
            $dto->set_content( $wp_rest_request->get_param( 'content' ) );
            $dto->set_created_by( get_current_user_id() );

            do_action( "newform_before_create_form", $dto, $wp_rest_request );

            $form_id = $this->form_repository->create( $dto );

            $dto->set_id( $form_id );

            do_action( "newform_after_create_form", $dto, $wp_rest_request );

            return Response::send(
                [
                    'data'    => [
                        'id' => $form_id
                    ],
                    'message' => esc_html__( 'The form has been created successfully.', 'helpgent' )
                ], 201
            );
        } catch ( Exception $exception ) {
            return Response::send(
                [
                    'message' => $exception->getMessage()
                ],
                $exception->getCode()
            );
        }
    }

    public function update( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'      => 'required|numeric',
                'title'   => 'required|string|max:255|min:5',
                'status'  => 'required|string|accepted:publish,draft',
                'content' => 'required|json'
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
            $dto = new FormDTO;

            $dto->set_id( $wp_rest_request->get_param( 'id' ) );
            $dto->set_title( $wp_rest_request->get_param( 'title' ) );
            $dto->set_status( $wp_rest_request->get_param( 'status' ) );
            $dto->set_content( $wp_rest_request->get_param( 'content' ) );
            $dto->set_created_by( get_current_user_id() );

            do_action( "newform_before_update_form", $dto, $wp_rest_request );

            $form_id = $this->form_repository->update( $dto );

            $dto->set_id( $form_id );

            do_action( "newform_after_update_form", $dto, $wp_rest_request );

            return Response::send(
                [
                    'message' => esc_html__( 'The form has been updated successfully.', 'helpgent' )
                ]
            );
        } catch ( Exception $exception ) {
            return Response::send(
                [
                    'message' => $exception->getMessage()
                ],
                $exception->getCode()
            );
        }
    }
}
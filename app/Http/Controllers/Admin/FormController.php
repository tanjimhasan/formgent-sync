<?php

namespace NewForm\App\Http\Controllers\Admin;

use Exception;
use NewForm\App\DTO\FormDTO;
use NewForm\App\DTO\FormReadDTO;
use NewForm\App\Http\Controllers\Controller;
use NewForm\App\Models\Form;
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
                'per_page'   => 'numeric',
                'page'       => 'numeric',
                's'          => 'string|max:255',
                'sort_by'    => 'string|accepted:last_modified,date_created,alphabetical,last_submission,unread,draft,publish',
                'date_type'  => 'string|accepted:today,yesterday,last_week,last_month,date_frame',
                'date_frame' => 'array'
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

        if ( $wp_rest_request->has_param( 'sort_by' ) ) {
            $dto->set_sort_by( $wp_rest_request->get_param( 'sort_by' ) );
        }

        if ( $wp_rest_request->has_param( 'date_type' ) ) {
            $dto->set_date_type( $wp_rest_request->get_param( 'date_type' ) );
        }

        if ( $wp_rest_request->has_param( 'date_frame' ) ) {
            $dto->set_date_frame( $wp_rest_request->get_param( 'date_frame' ) );
        }

        $data              = $this->form_repository->get( $dto );
        $response          = $this->pagination( $wp_rest_request, $data['total'], $dto->get_per_page() );
        $response['forms'] = $data['forms'];

        return Response::send( $response );
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
                    'message' => esc_html__( 'Form not found' )
                ], 404
            );
        }

        return Response::send(
            [
                'form' => $form
            ]
        );
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

    public function update_status( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'     => 'required|numeric',
                'status' => 'required|string|accepted:publish,draft'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        do_action( 'newform_before_update_form_status', $wp_rest_request );

        $this->form_repository->update_status( intval( $wp_rest_request->get_param( 'id' ) ), $wp_rest_request->get_param( 'status' ) );

        do_action( 'newform_after_update_form_status',  $wp_rest_request );

        return Response::send(
            [
                'message' => esc_html__( 'The form status has been updated successfully.' )
            ]
        );
    }

    public function duplicate( Validator $validator, WP_REST_Request $wp_rest_request ) {
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
                    'message' => esc_html__( 'Form not found' )
                ], 404
            );
        }

        $dto = new FormDTO;

        foreach ( $form as $column => $value ) {
            if ( in_array( $column, ['id', 'title', 'created_at', 'updated_at'], true ) ) {
                continue;
            }
            $set_method = "set_{$column}";
            $dto->$set_method( $value );
        }

        $dto->set_title( $form->title . ' - copy' );
        $dto->set_created_by( get_current_user_id() );

        try {
            do_action( "newform_before_duplicate_form", $dto, $wp_rest_request );

            $form_id = $this->form_repository->create( $dto );

            $dto->set_id( $form_id );

            do_action( "newform_after_duplicate_form", $dto, $wp_rest_request );

            return Response::send(
                [
                    'data'    => [
                        'id' => $form_id
                    ],
                    'message' => esc_html__( 'The form has been duplicated successfully.', 'helpgent' )
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

    public function select( Validator $validator, WP_REST_Request $wp_rest_request ) {
        return Response::send(
            [
                'forms' => Form::query( 'form' )->select( 'form.title as label', 'form.id as value' )->where( 'form.status', 'publish' )->order_by_desc( 'form.id' )->get()
            ]
        );
    }

    public function delete( Validator $validator, WP_REST_Request $wp_rest_request ) {
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

        do_action( 'newform_before_delete_form', $wp_rest_request );

        $this->form_repository->delete_by_id( intval( $wp_rest_request->get_param( 'id' ) ) );

        do_action( 'newform_after_delete_form', $wp_rest_request );

        return Response::send(
            [
                'message' => esc_html__( 'The form has been deleted successfully.' )
            ]
        );
    }
}
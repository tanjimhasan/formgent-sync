<?php

namespace FormGent\App\Http\Controllers\Admin;

defined( 'ABSPATH' ) || exit;

use FormGent\App\DTO\ResponseReadDTO;
use FormGent\App\Http\Controllers\Controller;
use FormGent\App\Repositories\ResponseRepository;
use FormGent\App\Repositories\AnswerRepository;
use FormGent\App\Repositories\FormRepository;
use FormGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;
use FormGent\WpMVC\Routing\Response;

class ResponseController extends Controller {
    public ResponseRepository $repository;

    public FormRepository $form_repository;

    public function __construct( ResponseRepository $repository, FormRepository $form_repository ) {
        $this->repository      = $repository;
        $this->form_repository = $form_repository;
    } 

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'per_page'         => 'numeric',
                'page'             => 'numeric',
                's'                => 'string|max:255',
                'post_id'          => 'numeric',
                'is_read'          => 'numeric|accepted:0,1',
                'order_by'         => 'string|max:50',
                'order'            => 'string|accepted:asc,desc',
                'order_field_type' => 'string|accepted:response,answer',
                // 'date_type'  => 'string|accepted:today,yesterday,last_week,last_month,date_frame',
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

        $dto = new ResponseReadDTO;
        $dto->set_page( intval( $wp_rest_request->get_param( 'page' ) ) );
        $dto->set_per_page( intval( $wp_rest_request->get_param( 'per_page' ) ) );
        $dto->set_search( (string) $wp_rest_request->get_param( 's' ) );

        if ( $wp_rest_request->has_param( 'post_id' ) ) {
            $dto->set_post_id( intval( $wp_rest_request->get_param( 'post_id' ) ) );
        }

        if ( $wp_rest_request->has_param( 'is_read' ) ) {
            $dto->set_is_read( $wp_rest_request->get_param( 'is_read' ) );
        }

        $dto->set_order( $wp_rest_request->get_param( 'order' ) ?? 'desc' )
        ->set_order_by( $wp_rest_request->get_param( 'order_by' ) ?? 'id' )
        ->set_order_field_type( $wp_rest_request->get_param( 'order_field_type' ) ?? 'response' );
        // if ( $wp_rest_request->has_param( 'sort_by' ) ) {
        //     $dto->set_sort_by( $wp_rest_request->get_param( 'sort_by' ) );
        // }

        // if ( $wp_rest_request->has_param( 'date_type' ) ) {
        //     $dto->set_date_type( $wp_rest_request->get_param( 'date_type' ) );
        // }

        // if ( $wp_rest_request->has_param( 'date_type' ) ) {
        //     $dto->set_date_type( $wp_rest_request->get_param( 'date_type' ) );
        // }

        $data                  = $this->repository->get( $dto );
        $response              = $this->pagination( $wp_rest_request, $data['total'], $dto->get_per_page(), false );
        $response['responses'] = $data['responses'];

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

        $response = $this->repository->get_single_by_id( intval( $wp_rest_request->get_param( 'id' ) ) );

        if ( ! $response ) {
            return Response::send(
                [
                    'message' => esc_html__( 'Response not found', 'formgent' )
                ], 404
            );
        }
        
        /**
         * @var AnswerRepository $answer_repository
         */
        $answer_repository = formgent_singleton( AnswerRepository::class );

        $response->data = $answer_repository->get( $response->id );

        return Response::send(
            [
                'response' => $response
            ]
        );
    }

    public function get_fields( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'post_id' => 'required|numeric'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $post_id = intval( $wp_rest_request->get_param( 'post_id' ) );
        $form    = $this->form_repository->get_by_id( $post_id );

        if ( ! $form ) {
            return Response::send(
                [
                    'message' => esc_html__( 'Form not found', 'formgent' )
                ], 404
            );
        }

        $allowed_fields = formgent_get_response_table_allowed_fields();
        $fields         = [];

        $selected_fields = get_post_meta( $form->id, 'response_table_field_ids', true );

        foreach ( json_decode( $form->content, true )['fields'] as $field ) {
            if ( ! in_array( $field['type'], $allowed_fields, true ) ) {
                continue;
            }

            $fields[] = [
                'id'    => $field['id'],
                'label' => $field['general_option']['label']
            ];
        }

        return Response::send(
            [
                'selected_fields' => is_array( $selected_fields ) ? $selected_fields : [],
                'fields'          => $fields
            ]
        );
    }

    public function update_fields( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'post_id'   => 'required|numeric',
                'field_ids' => 'required|array'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $field_ids = $wp_rest_request->get_param( 'field_ids' );

        if ( ! formgent_is_one_level_array( $field_ids ) ) {
            return Response::send(
                [
                    'message' => esc_html__( 'Something was wrong', 'formgent' )
                ], 500
            );
        }

        $post_id = intval( $wp_rest_request->get_param( 'post_id' ) );
        $form    = $this->form_repository->get_by_id( $post_id, [1] );

        if ( ! $form ) {
            return Response::send(
                [
                    'message' => esc_html__( 'Form not found', 'formgent' )
                ], 404
            );
        }

        $field_ids = map_deep( $field_ids, "sanitize_text_field" );

        update_post_meta( $post_id, "response_table_field_ids", $field_ids );

        return Response::send( [] );
    }

    public function update_starred( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'         => 'required|numeric',
                'is_starred' => 'required|numeric|accepted:0,1'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        do_action( 'formgent_before_update_response_starred', $wp_rest_request );

        $this->repository->update_starred( intval( $wp_rest_request->get_param( 'id' ) ), $wp_rest_request->get_param( 'is_starred' ) );

        do_action( 'formgent_after_update_response_starred', $wp_rest_request );

        return Response::send(
            [
                'message' => esc_html__( 'The response starred has been updated successfully.', 'formgent' )
            ]
        );
    }

    public function update_read( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'      => 'required|numeric',
                'is_read' => 'required|numeric|accepted:0,1'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        do_action( 'formgent_before_update_response_read', $wp_rest_request );

        $this->repository->update_read( intval( $wp_rest_request->get_param( 'id' ) ), $wp_rest_request->get_param( 'is_read' ) );

        do_action( 'formgent_after_update_response_read', $wp_rest_request );

        return Response::send(
            [
                'message' => esc_html__( 'The response read has been updated successfully.', 'formgent' )
            ]
        );
    }

    public function export( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'form_id'      => 'required|numeric',
                'response_ids' => 'required|array'
            ]
        );
    
        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $response_ids = $wp_rest_request->get_param( 'response_ids' );

        if ( ! formgent_is_one_level_array( $response_ids ) ) {
            return Response::send(
                [
                    'message' => esc_html__( 'Something was wrong', 'formgent' )
                ], 500
            );
        }

        $form_id = intval( $wp_rest_request->get_param( 'form_id' ) );

        return Response::send(
            [
                'form'      => $this->form_repository->get_by_id( $form_id, ['content'] ),
                'responses' => $this->repository->get_export_data( $form_id, $response_ids )
            ]
        );
    }
}
<?php

namespace FormGent\App\Http\Controllers\Admin;

defined( 'ABSPATH' ) || exit;

use FormGent\App\DTO\ResponseReadDTO;
use FormGent\App\Http\Controllers\Controller;
use FormGent\App\Repositories\ResponseRepository;
use FormGent\App\Repositories\AnswerRepository;
use FormGent\App\Repositories\FormRepository;
use FormGent\WpMVC\RequestValidator\Validator;
use FormGent\App\Repositories\FormMetaRepository;
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
                'per_page' => 'numeric',
                'page'     => 'numeric',
                's'        => 'string|max:255',
                'form_id'  => 'numeric',
                'is_read'  => 'numeric|accepted:0,1',
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

        if ( $wp_rest_request->has_param( 'form_id' ) ) {
            $dto->set_form_id( intval( $wp_rest_request->get_param( 'form_id' ) ) );
        }

        if ( $wp_rest_request->has_param( 'is_read' ) ) {
            $dto->set_is_read( $wp_rest_request->get_param( 'is_read' ) );
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

    public function columns( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'form_id' => 'required|numeric'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $form = $this->form_repository->get_by_id( intval( $wp_rest_request->get_param( 'form_id' ) ) );

        if ( ! $form ) {
            return Response::send(
                [
                    'message' => esc_html__( 'Form not found', 'formgent' )
                ], 404
            );
        }

        $allowed_fields = formgent_get_response_table_allowed_fields();
        $columns        = [];

        /**
         * @var FormMetaRepository $formmeta_repository
         */
        $formmeta_repository = formgent_singleton( FormMetaRepository::class );

        $selected_columns = maybe_unserialize( $formmeta_repository->get_meta_value( $form->id, 'response_table_column_ids' ) );

        foreach ( json_decode( $form->content, true )['fields'] as $field ) {
            if ( ! in_array( $field['type'], $allowed_fields, true ) ) {
                continue;
            }

            $columns[] = [
                'id'    => $field['id'],
                'label' => $field['general_option']['label']
            ];
        }

        return Response::send(
            [
                'selected_columns' => is_array( $selected_columns ) ? $selected_columns : [],
                'columns'          => $columns
            ]
        );
    }
}
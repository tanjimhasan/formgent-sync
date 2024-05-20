<?php

namespace NewForm\App\Http\Controllers;

use NewForm\App\DTO\EntryDTO;
use NewForm\App\Exceptions\RequestValidatorException;
use NewForm\App\Http\Controllers\Controller;
use NewForm\App\Repositories\EntryRepository;
use NewForm\App\Repositories\FieldRepository;
use NewForm\App\Repositories\FormRepository;
use NewForm\WpMVC\RequestValidator\Validator;
use NewForm\WpMVC\Routing\Response;
use stdClass;
use WP_REST_Request;

class EntryController extends Controller {
    public EntryRepository $repository;

    public FieldRepository $field_repository;

    public FormRepository $form_repository;

    public function __construct( EntryRepository $repository, FieldRepository $field_repository, FormRepository $form_repository ) {
        $this->repository       = $repository;
        $this->field_repository = $field_repository;
        $this->form_repository  = $form_repository;
    }

    public function store( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'form_id' => 'required|integer',
                'data'    => 'required|array'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $form_id = $wp_rest_request->get_param( 'form_id' );

        $form = $this->form_repository->get_by_id_publish( $form_id );

        if ( ! $form ) {
            return Response::send(
                [
                    'message' => esc_html__( "From not found" )
                ], 404
            );
        }

        $validate = $this->validate( $form ,$validator, $wp_rest_request );

        if ( ! empty( $validate['errors'] ) ) {
            return Response::send(
                [
                    'messages' => $validate['errors']
                ], 422
            );
        }

        $entry_dto = new EntryDTO;
        $entry_dto->set_form_id( $form_id );
        $entry_dto->set_created_by( wp_get_current_user()->ID );
        $entry_dto->set_ip( newform_get_user_ip_address() );

        do_action( "new_form_before_create_form_entry", $form, $wp_rest_request );

        $entry_id = $this->repository->create( $entry_dto );

        $this->field_repository->creates( $entry_id, ...$validate['field_dtos'] );

        do_action( "new_form_after_create_form_entry", $entry_id, $form, $wp_rest_request );

        return [
            'message' => esc_html__( "The form was submitted successfully!" )
        ];
    }

    private function validate( stdClass $form, Validator $validator, WP_REST_Request $wp_rest_request ) {
        $form_data      = $wp_rest_request->get_param( 'data' );
        $allowed_fields = newform_get_entry_allowed_fields();

        $form_content = json_decode( $form->content, true );
        $fields       = $form_content['fields'];
        $field_ids    = array_column( $fields, 'id' );

        $errors     = [];
        $field_dtos = [];

        foreach ( $form_data as $field_data ) {
            $field_key = array_search( $field_data['id'], $field_ids );

            /**
             * Skip if field not found in db fields list
             */
            if ( ! is_int( $field_key ) ) {
                unset( $form_data[$field_key] );
                continue;
            }

            $field = $fields[$field_key];

            if ( ! in_array( $field['type'], $allowed_fields, true ) ) {
                continue;
            }

            $wp_rest_request->set_body_params( $field_data );

            try {
                $field_handler = newform_field_handler( $field['type'] );

                $field_handler->validate( $field, $wp_rest_request, $validator );

                $field_dtos[] = $field_handler->get_field_dto( $field_data, $field, $form );

            } catch ( RequestValidatorException $exception ) {
                $errors[$field['id']] = $exception->get_messages();
            }
        }

        return compact( 'errors', 'field_dtos' );
    }

    // private function form_data() {
    //     return [
    //         [
    //             'id'        => '5641354164131',
    //             'long_text' => 'sdfasdfsdfsdf'
    //         ],
    //         [
    //             'id'         => '64563161631',
    //             'short_text' => 'askdfaksdfka;sldfk;sd'
    //         ]
    //     ];
    // }

    // private function form_fields() {
    //     return [
    //         [
    //             'id'             => '5641354164131',
    //             'type'           => 'long_text',
    //             'general_option' => [
    //                 'validations' => [
    //                     'required' => [
    //                         'value' => '1'
    //                     ]
    //                 ]
    //             ]
    //         ],
    //         [
    //             'id'             => '64563161631',
    //             'type'           => 'short_text',
    //             'general_option' => [
    //                 'validations' => [
    //                     'required' => [
    //                         'value' => '1'
    //                     ]
    //                 ]
    //             ]
    //         ]
    //     ];
    // }
}


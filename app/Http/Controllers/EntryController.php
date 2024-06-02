<?php

namespace FormGent\App\Http\Controllers;

use FormGent\App\DTO\EntryDTO;
use FormGent\App\Exceptions\RequestValidatorException;
use FormGent\App\Http\Controllers\Controller;
use FormGent\App\Repositories\EntryRepository;
use FormGent\App\Repositories\FieldRepository;
use FormGent\App\Repositories\FormRepository;
use FormGent\WpMVC\RequestValidator\Validator;
use FormGent\WpMVC\Routing\Response;
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
                'form_id'   => 'required|integer',
                'form_data' => 'required|array'
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

        /**
         * Validating field data and creating field dto for insert.
         */
        $validate = $this->validate( $form ,$validator, $wp_rest_request );

        if ( ! empty( $validate['errors'] ) ) {
            return Response::send(
                [
                    'messages' => $validate['errors']
                ], 422
            );
        }

        $entry_dto = new EntryDTO;
        $entry_dto->set_form_id( $form_id )->set_created_by( wp_get_current_user()->ID )->set_ip( formgent_get_user_ip_address() );

        /**
         * Storing the current user browser and device information, if information is present.
         */
        // $which_browser = new \FormGent\WhichBrowser\Parser( $wp_rest_request->get_header( 'user-agent' ) );
        // $browser       = $which_browser->browser;

        // if ( $browser ) {
        //     $entry_dto->set_browser( $browser->name )->set_browser_version( $browser->version->value )->set_device( $which_browser->os->name );
        // }

        do_action( "formgent_before_create_form_entry", $form, $wp_rest_request );

        $entry_id = $this->repository->create( $entry_dto );

        $this->field_repository->creates( $entry_id, ...$validate['field_dtos'] );

        do_action( "formgent_after_create_form_entry", $entry_id, $form, $wp_rest_request );

        return Response::send(
            [
                'message' => esc_html__( "The form was submitted successfully!" )
            ], 201
        );
    }

    /**
     * @param stdClass $form
     * @param Validator $validator
     * @param WP_REST_Request $wp_rest_request
     * @return array
     */
    private function validate( stdClass $form, Validator $validator, WP_REST_Request $wp_rest_request ) {
        $form_data = $wp_rest_request->get_param( 'form_data' );
        $wp_rest_request->set_body_params( $form_data );

        $allowed_fields = formgent_get_entry_allowed_fields();

        $form_content = json_decode( $form->content, true );
        $fields       = $form_content['fields'];
        $field_names  = array_column( $fields, 'name' );

        $errors     = [];
        $field_dtos = [];

        foreach ( $form_data as $field_name => $field_data ) {
            $field_key = array_search( $field_name, $field_names );

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

            try {
                $field_handler = formgent_field_handler( $field['type'] );

                $field_handler->validate( $field, $wp_rest_request, $validator );

                $field_dtos[] = $field_handler->get_field_dto( $field, $wp_rest_request, $form );

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
    //             'name'           => 'long_text',
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
    //             'name'           => 'short_text',
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


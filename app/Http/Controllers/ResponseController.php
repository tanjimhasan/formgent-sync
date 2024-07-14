<?php

namespace FormGent\App\Http\Controllers;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Models\Answer;
use FormGent\App\DTO\ResponseDTO;
use FormGent\App\Exceptions\RequestValidatorException;
use FormGent\App\Http\Controllers\Controller;
use FormGent\App\Repositories\ResponseRepository;
use FormGent\App\Repositories\AnswerRepository;
use FormGent\App\Repositories\FormRepository;
use FormGent\WpMVC\RequestValidator\Validator;
use FormGent\WpMVC\Routing\Response;
use stdClass;
use WP_REST_Request;
use FormGent\App\DTO\AnswerDTO;

class ResponseController extends Controller {
    public ResponseRepository $repository;

    public AnswerRepository $answer_repository;

    public FormRepository $form_repository;

    public function __construct( ResponseRepository $repository, AnswerRepository $answer_repository, FormRepository $form_repository ) {
        $this->repository        = $repository;
        $this->answer_repository = $answer_repository;
        $this->form_repository   = $form_repository;
    }

    public function store( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'        => 'required|integer',
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

        $id = $wp_rest_request->get_param( 'id' );

        $form = $this->form_repository->get_by_id_publish( $id, ['ID', 'post_content'] );

        if ( ! $form ) {
            return Response::send(
                [
                    'message' => esc_html__( "From not found", 'formgent' )
                ], 404
            );
        }

        $form->form_type            = get_post_meta( $form->ID, 'formgent_type', true );
        $form->save_incomplete_data = (bool) get_post_meta( $form->ID, 'formgent_save_incomplete_data', true );

        /**
         * Validating field data and creating field dto for insert.
         */
        $validate_data = $this->validate( $form ,$validator, $wp_rest_request );

        if ( ! empty( $validate_data['errors'] ) ) {
            return Response::send(
                [
                    'messages' => $validate_data['errors']
                ], 422
            );
        }

        $response_dto = new ResponseDTO;
        $response_dto->set_form_id( $form->ID )->set_created_by( wp_get_current_user()->ID )->set_ip( formgent_get_user_ip_address() );

        /**
         * Storing the current user browser and device information, if information is present.
         */
        // $which_browser = new \FormGent\WhichBrowser\Parser( $wp_rest_request->get_header( 'user-agent' ) );
        // $browser       = $which_browser->browser;

        // if ( $browser ) {
        //     $response_dto->set_browser( $browser->name )->set_browser_version( $browser->version->value )->set_device( $which_browser->os->name );
        // }

        do_action( "formgent_before_create_form_response", $response_dto, $form, $wp_rest_request );

        $response_id = $this->repository->create( $response_dto );

        $this->answer_repository->creates( $response_id, ...$validate_data['field_dtos'] );

        if ( ! empty( $validate_data['parent_field_ids'] ) ) {

            $parent_fields = Answer::query()->select( 'id', 'field_id' )->where( 'response_id', $response_id )->where_in( 'field_id', $validate_data['parent_field_ids'] )->get();

            $parent_ids = [];

            foreach ( $parent_fields as $parent ) {
                $parent_ids[$parent->field_id] = $parent->id;
            }

            $this->answer_repository->creates_from_array(
                array_map(
                    function( array $children ) use( $response_id, $parent_ids ) {
                        /**
                         * @var AnswerDTO $children['dto']
                         * @var AnswerDTO $children['parent_dto']
                         */
                        return $children['dto']->set_response_id( $response_id )->set_parent_id( $parent_ids[$children['parent_dto']->get_field_id()] )->to_array();
                    }, $validate_data['children_dtos']
                )
            );
        }

        do_action( "formgent_after_create_form_response", $response_id, $form, $wp_rest_request );

        return Response::send(
            [
                'message' => esc_html__( "The form was submitted successfully!", 'formgent' )
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

        $registered_fields = formgent_config( "fields" );

        $fields           = formgent_get_form_field_settings( parse_blocks( $form->post_content ) );
        $errors           = [];
        $field_dtos       = [];
        $children_dtos    = [];
        $parent_field_ids = [];

        foreach ( $form_data as $field_name => $field_data ) {
            /**
             * Skip if field not found in db fields list
             */
            if ( empty( $fields[$field_name] ) ) {
                unset( $form_data[$field_name] );
                continue;
            }

            $field = $fields[$field_name];

            /**
             * Ignore this field if field is not allowed form submission
             */
            if ( empty( $registered_fields[$field['field_type']]['allowed_in_response'] ) ) {
                continue;
            }

            try {
                /**
                 * Get this field dedicated handler class
                 */
                $field_handler = formgent_field_handler( $field['field_type'] );

                if ( ! in_array( $form->form_type, $field_handler::get_supported_form_types(), true ) ) {
                    continue;
                }

                $field_handler->validate( $field, $wp_rest_request, $validator );

                $dto = $field_handler->get_field_dto( $field, $wp_rest_request, $form );

                if ( $field_handler->has_children ) {
                    $parent_field_ids[] = $dto->get_field_id();
                    foreach ( $field_handler->get_children_dtos( $field, $wp_rest_request, $form ) as $children_dto ) {
                        $children_dtos[] = [
                            'dto'        => $children_dto,
                            'parent_dto' => $dto
                        ];
                    }
                }

                $field_dtos[] = $dto;

            } catch ( RequestValidatorException $exception ) {
                $errors[$field['id']] = $exception->get_messages();
            }
        }

        return compact( 'field_dtos', 'children_dtos', 'parent_field_ids', 'errors' );
    }
}


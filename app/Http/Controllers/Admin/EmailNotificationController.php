<?php

namespace FormGent\App\Http\Controllers\Admin;

defined( "ABSPATH" ) || exit;

use Exception;
use FormGent\App\Repositories\EmailNotificationRepository;
use FormGent\App\Repositories\FormRepository;
use FormGent\WpMVC\RequestValidator\Validator;
use FormGent\WpMVC\Routing\Response;
use FormGent\App\Http\Controllers\Controller;
use FormGent\App\DTO\EmailNotificationDTO;
use WP_REST_Request;

class EmailNotificationController extends Controller {
    public EmailNotificationRepository $repository;

    public FormRepository $form_repository;

    public function __construct( EmailNotificationRepository $repository, FormRepository $form_repository ) {
        $this->repository      = $repository;
        $this->form_repository = $form_repository;
    }

    public function index() {
        return Response::send(
            [
                'emails' => $this->repository->get()
            ]
        );
    }

    public function store( WP_REST_Request $request, Validator $validator ) {
        $validator->validate( $this->get_validation_rules() );

        // Check if validation failed.
        if ( $validator->is_fail() ) {
            return Response::send( ['messages' => $validator->errors], 422 );
        }

        $form = $this->form_repository->get_by_id( $request->get_param( 'form_id' ) );

        if ( ! $form ) {
            return Response::send(
                [
                    'message' => esc_html__( 'Form not found', 'formgent' )
                ], 404
            );
        }

        try {
            $this->repository->create( $this->get_dto( $request ) );
            return Response::send(
                [
                    'message' => esc_html__( 'Email notification was created successfully!', 'formgent' )
                ]
            );
        } catch ( Exception $ex ) {
            return Response::send(
                [
                    'message' => $ex->getMessage()
                ], $ex->getCode()
            );
        }
    }

    public function update( WP_REST_Request $request, Validator $validator ) {
        $rules       = $this->get_validation_rules();
        $rules['id'] = 'required|numeric';

        $validator->validate( $rules );

        $form = $this->form_repository->get_by_id( $request->get_param( 'form_id' ) );

        if ( ! $form ) {
            return Response::send(
                [
                    'message' => esc_html__( 'Form not found', 'formgent' )
                ], 404
            );
        }

        // Check if validation failed.
        if ( $validator->is_fail() ) {
            return Response::send( ['messages' => $validator->errors], 422 );
        }

        try {
            $this->repository->update( $this->get_dto( $request )->set_id( $request->get_param( 'id' ) ) );
            return Response::send(
                [
                    'message' => esc_html__( 'Email notification was updated successfully!', 'formgent' )
                ]
            );
        } catch ( Exception $ex ) {
            return Response::send(
                [
                    'message' => $ex->getMessage()
                ], $ex->getCode()
            );
        }
    }

    public function delete( WP_REST_Request $request, Validator $validator ) {
        $validator->validate(
            [
                'id' => 'required|numeric'
            ] 
        );

        // Check if validation failed.
        if ( $validator->is_fail() ) {
            return Response::send( ['messages' => $validator->errors], 422 );
        }

        try {
            $this->repository->delete_by_id( $request->get_param( 'id' ) );
            return Response::send(
                [
                    'message' => esc_html__( 'Email notification was deleted successfully!', 'formgent' )
                ]
            );
        } catch ( Exception $ex ) {
            return Response::send(
                [
                    'message' => $ex->getMessage()
                ], $ex->getCode()
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

        $this->repository->update_status( intval( $wp_rest_request->get_param( 'id' ) ), $wp_rest_request->get_param( 'status' ) );

        return Response::send(
            [
                'message' => esc_html__( 'The status has been updated successfully.', 'formgent' )
            ]
        );
    }

    protected function get_validation_rules() {
        return [
            'form_id'  => 'required|integer',
            'name'     => 'required|string|max:255',
            'send_to'  => 'required|string|max:255',
            'subject'  => 'required|string|max:255',
            'body'     => 'required|string|max:2000',
            'cc'       => 'string|max:255',
            'bcc'      => 'string|max:255',
            'reply_to' => 'string|max:255',
            'status'   => 'required|string|accepted:publish,draft',
        ];
    }

    protected function get_dto( WP_REST_Request $request ) {
        return ( new EmailNotificationDTO )->set_form_id( $request->get_param( 'form_id' ) )
        ->set_name( $request->get_param( 'name' ) )
        ->set_send_to( $request->get_param( 'send_to' ) )
        ->set_subject( $request->get_param( 'subject' ) )
        ->set_body( $request->get_param( 'body' ) )
        ->set_cc( $request->get_param( 'cc' ) )
        ->set_bcc( $request->get_param( 'bcc' ) )
        ->set_reply_to( $request->get_param( 'reply_to' ) )
        ->set_status( $request->get_param( 'status' ) );
    }
}
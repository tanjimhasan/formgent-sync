<?php

namespace FormGent\App\Http\Controllers\Admin;

defined( 'ABSPATH' ) || exit;

use FormGent\App\DTO\NoteDTO;
use FormGent\App\Repositories\NoteRepository;
use FormGent\WpMVC\Routing\Response;
use FormGent\App\Http\Controllers\Controller;
use FormGent\WpMVC\RequestValidator\Validator;
use FormGent\App\DTO\NoteReadDTO;
use WP_REST_Request;

class NoteController extends Controller {
    public NoteRepository $repository;

    public function __construct( NoteRepository $repository ) {
        $this->repository = $repository;
    }

    public function index( Validator $validate, WP_REST_Request $request ) {
        $validate->validate(
            [
                'response_id' => 'required|numeric'
            ]
        );


        if ( $validate->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validate->errors 
                ], 422
            );
        }

        $dto = new NoteReadDTO;
        $dto->set_response_id( $request->get_param( 'response_id' ) );

        return Response::send(
            [
                'notes' => $this->repository->get( $dto )
            ] 
        );
    }

    public function store( Validator $validate, WP_REST_Request $request ) {
        $validate->validate(
            [
                'response_id' => 'required|integer',
                'note'        => 'required|string|max:1000',
            ]
        );

        if ( $validate->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validate->errors 
                ], 422
            );
        }

        $dto = new NoteDTO;
        $dto->set_response_id( $request->get_param( 'response_id' ) )->set_note( $request->get_param( 'note' ) );

        $this->repository->create( $dto );

        return Response::send(
            [
                'message' => esc_html__( "The note has been created successfully." )
            ], 201 
        );
    }

    public function update( Validator $validate, WP_REST_Request $request ) {
        $validate->validate(
            [
                'id'          => 'required|numeric',
                'response_id' => 'required|integer',
                'note'        => 'required|string|max:1000',
            ]
        );


        if ( $validate->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validate->errors 
                ], 422
            );
        }

        $dto = new NoteDTO;
        $dto->set_id( $request->get_param( 'id' ) )->set_response_id( $request->get_param( 'response_id' ) )->set_note( $request->get_param( 'note' ) );

        $this->repository->update( $dto );

        return Response::send(
            [
                'message' => esc_html__( "The note has been updated successfully." )
            ] 
        );
    }

    public function delete( Validator $validate, WP_REST_Request $request ) {
        $validate->validate(
            [
                'response_id' => 'required|integer',
                'id'          => 'required|numeric'
            ]
        );

        if ( $validate->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validate->errors 
                ], 422
            );
        }

        $this->repository->delete( $request->get_param( 'response_id' ), intval( $request->get_param( 'id' ) ) );

        return Response::send(
            [
                'message' => esc_html__( "The note has been deleted successfully." )
            ] 
        );
    }
}
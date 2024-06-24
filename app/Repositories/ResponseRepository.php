<?php

namespace FormGent\App\Repositories;

defined( 'ABSPATH' ) || exit;

use FormGent\App\DTO\ResponseDTO;
use FormGent\App\DTO\ResponseReadDTO;
use FormGent\App\Models\Response;
use FormGent\App\Models\Form;
use FormGent\App\Models\User;
use FormGent\WpMVC\Database\Query\Builder;
use FormGent\App\Models\Answer;
use FormGent\WpMVC\Database\Query\JoinClause;

class ResponseRepository {
    public function get( ResponseReadDTO $dto ) {
        $responses_query = Response::query( 'response' )->left_join( Form::get_table_name() . ' as form', "response.form_id", "form.id" )->where( 'response.is_completed', 1 );

        if ( $dto->get_form_id() ) {
            $responses_query->where( 'response.form_id', $dto->get_form_id() );
        }

        if ( $dto->get_is_read() ) {
            $responses_query->where( 'response.is_read', $dto->get_is_read() );
        }

        // $this->forms_date_query( $forms_query, $dto );
        $this->responses_search_query( $responses_query, $dto );

        $count_query = clone $responses_query;

        do_action( 'formgent_responses_count_query', $count_query, $dto );

        $select_columns = ['response.id', 'response.form_id', 'form.title as form_title', 'response.is_read', 'response.device', 'response.browser', 'response.created_at', 'response.updated_at'];

        /**
         * Get response answers from answer table by select field ids
         */
        $table_field_ids = maybe_unserialize( formgent_get_form_meta_value( $dto->get_form_id(), 'response_table_field_ids' ) );

        if ( ! empty( $table_field_ids ) && is_array( $table_field_ids ) ) {
            $responses_query->with(
                'answers', function( Builder $query ) use( $table_field_ids ) {
                    $query->select( 'field_id', 'field_type', 'value', 'response_id' )->where_in( 'field_id', $table_field_ids );
                }
            );
        }

        $responses_query->select( $select_columns );

        $this->responses_order_query( $responses_query, $dto );

        do_action( 'formgent_responses_query', $responses_query, $dto );

        return [
            'total'     => $count_query->count(),
            'responses' => $responses_query->pagination( $dto->get_per_page(), $dto->get_page() )
        ];
    }

    private function responses_order_query( Builder $query, ResponseReadDTO $dto ) {
        if ( 'response' === $dto->get_order_field_type() ) {
            $query->order_by( $dto->get_order_by(), $dto->get_order() );
        } else {
            $query->left_join(
                Answer::get_table_name() . " as answer", function( JoinClause $join ) use( $dto ) {
                    $join->on_column( "response.id", "answer.response_id" )->on( "answer.field_id", $dto->get_order_by() );
                } 
            )->order_by( "answer.value", $dto->get_order() );
        }
    }

    private function responses_search_query( Builder $query, ResponseReadDTO $dto ) {
        $search = $dto->get_search();

        if ( empty( $search ) ) {
            return $query;
        }

        return $query->where( "form.title", 'like',  "%{$search}%" );
    }

    public function create( ResponseDTO $dto ) {
        return Response::query()->insert_get_id( $dto->to_array() );
    }

    public function get_by_id( int $id, $columns = ['response.*'] ) {
        return Response::query( 'response' )->select( $columns )->where( 'response.id', $id )->first();
    }

    public function get_single_by_id( int $id, $columns = ['response.*', 'user.display_name as username', 'form.content as form_content'] ) {
        return Response::query( 'response' )->select( $columns )->where( 'response.id', $id )->left_join( User::get_table_name() . ' as user', 'response.created_by', 'user.ID' )->left_join( Form::get_table_name() . ' as form', 'response.form_id', 'form.id' )->first();
    }

    public function update_starred( int $response_id, int $is_starred ) {
        return Response::query()->where( 'id', $response_id )->update( [ 'is_starred' => $is_starred ] );
    }

    public function update_read( int $response_id, int $is_read ) {
        return Response::query()->where( 'id', $response_id )->update( [ 'is_read' => $is_read ] );
    }

    public function get_export_data( int $form_id, array $response_ids ) {
        return Response::query( 'response' )->with(
            'answers', function( Builder $query ) {
                $query->select( 'id', 'response_id', 'field_id', 'value' )->where_is_null( 'parent_id' );
            }
        )->with(
            'answers.children', function( Builder $query ) {
                $query->select( 'id', 'response_id', 'parent_id', 'field_id', 'value' );
            }
        )->where( 'form_id', $form_id )->where_in( 'id', $response_ids )->get();
    }
}
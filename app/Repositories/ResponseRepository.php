<?php

namespace FormGent\App\Repositories;

defined( 'ABSPATH' ) || exit;

use FormGent\App\DTO\ResponseDTO;
use FormGent\App\DTO\ResponseReadDTO;
use FormGent\App\Models\Response;
use FormGent\App\Models\User;
use FormGent\App\Models\Post;
use FormGent\WpMVC\Database\Query\Builder;
use FormGent\App\Models\Answer;
use FormGent\WpMVC\Database\Query\JoinClause;

class ResponseRepository {
    public function get( ResponseReadDTO $dto ) {
        $responses_query = Response::query( 'response' )->join( Post::get_table_name() . ' as post', 'post.ID', 'response.form_id' )->where( 'response.is_completed', 1 );

        if ( $dto->get_form_id() ) {
            $responses_query->where( 'post.ID', $dto->get_form_id() );
        }

        if ( $dto->get_is_read() ) {
            $responses_query->where( 'response.is_read', $dto->get_is_read() );
        }

        /**
         * Get response answers from answer table by select field ids
         */
        $table_field_ids = get_post_meta( $dto->get_form_id(), 'response_table_field_ids', true );

        if ( ! is_array( $table_field_ids ) ) {
            $table_field_ids = [];
        }

        if ( ! empty( $table_field_ids ) ) {
            $responses_query->left_join(
                Answer::get_table_name() . " as answer", function( JoinClause $join ) use( $table_field_ids ) {
                    $join->on_column( "response.id", "answer.response_id" )->on_in( 'field_id', $table_field_ids );
                } 
            );
        }

        $this->responses_search_query( $responses_query, $dto, $table_field_ids );

        $count_query = clone $responses_query;

        do_action( 'formgent_responses_count_query', $count_query, $dto );

        if ( ! empty( $table_field_ids ) ) {
            $responses_query->with(
                'answers', function( Builder $query ) use( $table_field_ids ) {
                    $query->select( 'field_id', 'field_type', 'value', 'response_id' )->where_in( 'field_id', $table_field_ids );
                }
            );
        }

        $select_columns = ['response.id', 'response.form_id', 'post.post_title as form_title', 'response.is_read', 'response.is_starred', 'response.is_completed', 'response.device', 'response.browser', 'response.created_at', 'response.updated_at'];
        $group_columns  = ['response.id', 'response.form_id', 'response.is_read', 'response.is_starred', 'response.is_completed', 'response.device', 'response.browser', 'response.created_at', 'response.updated_at'];

        $responses_query->select( $select_columns )->group_by( $group_columns );

        $this->responses_order_query( $responses_query, $dto, $table_field_ids );

        do_action( 'formgent_responses_query', $responses_query, $dto );

        return [
            'total'     => $count_query->count(),
            'responses' => $responses_query->pagination( $dto->get_per_page(), $dto->get_page() )
        ];
    }

    private function responses_order_query( Builder $query, ResponseReadDTO $dto, array $table_field_ids ) {
        if ( 'response' === $dto->get_order_field_type() ) {
            $query->order_by( $dto->get_order_by(), $dto->get_order() );
        } elseif ( ! empty( $table_field_ids ) ) {
            $query->left_join(
                Answer::get_table_name() . " as order_answer", function( JoinClause $join ) use( $dto ) {
                    $join->on_column( "response.id", "order_answer.response_id" )->on( "order_answer.field_id", $dto->get_order_by() );
                } 
            )->order_by( "order_answer.value", $dto->get_order() );
        }
    }

    private function responses_search_query( Builder $query, ResponseReadDTO $dto, array $table_field_ids ) {
        $search = $dto->get_search();

        if ( empty( $search ) ) {
            return $query;
        }

        if ( empty( $table_field_ids ) ) {
            return $query->where( "post.post_title", 'like',  "%{$search}%" );
        }
    
        return $query->where( "post.post_title", 'like',  "%{$search}%" )->or_where( 'answer.value', 'like', "%{$search}%" );
    }

    public function create( ResponseDTO $dto ) {
        return Response::query()->insert_get_id( $dto->to_array() );
    }

    public function get_by_id( int $id, $columns = ['response.*'] ) {
        return Response::query( 'response' )->select( $columns )->where( 'response.id', $id )->first();
    }

    public function get_single_by_id( int $id, $columns = ['response.*', 'user.display_name as username'] ) {
        return Response::query( 'response' )->select( $columns )->where( 'response.id', $id )->left_join( User::get_table_name() . ' as user', 'response.created_by', 'user.ID' )
        // ->left_join( Form::get_table_name() . ' as form', 'response.form_id', 'form.id' )
        ->first();
    }

    public function update_starred( int $response_id, int $is_starred ) {
        return Response::query()->where( 'id', $response_id )->update( [ 'is_starred' => $is_starred ] );
    }

    public function update_read( int $response_id, int $is_read ) {
        return Response::query()->where( 'id', $response_id )->update( [ 'is_read' => $is_read ] );
    }

    public function get_export_data( int $form_id, array $response_ids ) {
        $response_query = Response::query( 'response' )->with(
            'answers', function( Builder $query ) {
                $query->select( 'id', 'response_id', 'field_id', 'value' )->where_is_null( 'parent_id' );
            }
        )->with(
            'answers.children', function( Builder $query ) {
                $query->select( 'id', 'response_id', 'parent_id', 'field_id', 'value' );
            }
        )->where( 'form_id', $form_id );
    
        if ( ! empty( $response_ids ) ) {
            $response_query->where_in( 'id', $response_ids );
        }

        return $response_query->get();
    }

    public function deletes( int $form_id, array $ids ) {
        return Response::query( 'response' )->where( 'form_id', $form_id )->where_in( 'id', $ids )->delete();
    }
}
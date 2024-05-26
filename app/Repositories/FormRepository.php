<?php

namespace NewForm\App\Repositories;

use Exception;
use NewForm\App\DTO\FormDTO;
use NewForm\App\DTO\FormReadDTO;
use NewForm\App\Models\Entry;
use NewForm\App\Models\Form;
use NewForm\WpMVC\Database\Query\Builder;
use NewForm\WpMVC\Database\Query\JoinClause;

class FormRepository {
    public function get( FormReadDTO $dto ) {
        $forms_query = Form::query( 'form' )->left_join( "users as user", "user.ID", "form.created_by" );

        $this->forms_date_query( $forms_query, $dto );
        $this->forms_search_query( $forms_query, $dto );

        $count_query = clone $forms_query;

        do_action( 'helpgent_forms_count_query', $count_query, $dto );

        $select_columns   = ['form.id', 'form.title', 'form.status', 'form.type', 'form.created_by', 'form.created_at', 'form.updated_at', 'user.user_nicename as username', 'COUNT(DISTINCT entry.id) as total_entries', 'COUNT(DISTINCT CASE WHEN entry.is_read = 0 THEN entry.id ELSE NULL END) AS total_unread_entries'];
        $group_by_columns = ['form.id', 'form.title', 'form.status', 'form.type', 'form.created_by', 'form.created_at', 'form.updated_at', 'user.user_nicename' ];

        $forms_query->select( $select_columns )->left_join( Entry::get_table_name() . ' as entry', 'form.id', 'entry.form_id' )->group_by( $group_by_columns );

        $this->forms_sort_query( $forms_query, $dto );

        do_action( 'helpgent_forms_query', $forms_query, $dto );

        return [
            'total' => $count_query->count(),
            'forms' => $forms_query->pagination( $dto->get_per_page(), $dto->get_page() )
        ];
    }

    private function forms_search_query( Builder $query, FormReadDTO $dto ) {
        $search = $dto->get_search();

        if ( empty( $search ) ) {
            return $query;
        }

        global $wpdb;

        $search       = "%{$search}%";
        $search_query = $wpdb->prepare( "(form.title like %s or user.user_nicename like %s)", $search, $search );
        return $query->where_raw( $search_query );
    }

    private function forms_date_query( Builder $query, FormReadDTO $dto ) {
        if ( 'all' === $dto->get_date_type() ) {
            return $query;
        }

        $now              = newform_now();
        $from_date_format = "Y-m-d 00:00:01";
        $to_date_format   = "Y-m-d 23:59:59";

        $date_type  = $dto->get_date_type();
        $date_frame = $dto->get_date_frame();

        if ( 'today' === $date_type ) {
            $today = $now->format( $from_date_format );
            return $query->where_raw( "((form.updated_at is not null and form.updated_at > '{$today}') or (form.updated_at is null and form.created_at > '{$today}'))" );
        }

        if ( 'date_frame' === $date_type ) {
            /**
             * Checking if the date is valid and the date format is correct.
             */
            if ( empty( $date_frame['from'] ) ||
                ! is_string( $date_frame['from'] ) ||
                empty( $date_frame['to'] ) || 
                ! is_string( $date_frame['to'] ) ||
                ! newform_is_valid_date( $date_frame['from'], $from_date_format ) ||
                ! newform_is_valid_date( $date_frame['to'], $to_date_format )
            ) {
                return $query;
            }

            $form = sanitize_text_field( $date_frame['from'] );
            $to   = sanitize_text_field( $date_frame['to'] );
        } else {
            switch ( $date_type ) {
                case 'yesterday':
                    $date = $now->sub_days( 1 );
                    break;
                case 'last_week':
                    $date = $now->sub_days( 6 );
                    break;
                case 'last_month':
                    $date = $now->sub_days( 30 );
            }
            $form = $date->format( $from_date_format );
            $to   = newform_now()->format( $to_date_format );
        }

        return $query->where_raw( "((form.updated_at is not null and form.updated_at > '{$form}' and form.updated_at < '{$to}') or (form.updated_at is null and form.created_at > '{$form}' and form.created_at < '{$to}'))" );
    }

    private function forms_sort_query( Builder $query, FormReadDTO $dto ) {
        $sort_by = $dto->get_sort_by();

        if ( empty( $sort_by ) ) {
            return $query->order_by_desc( 'form.id' );
        }

        switch ( $sort_by ) {
            case 'last_modified':
                return $query->order_by_desc( 'form.updated_at' );
            case 'alphabetical':
                return $query->order_by_raw( 'form.title asc, form.id desc' );
            case 'last_submission':
                return $query->left_join(
                    Entry::get_table_name() . ' as max_entry', function( JoinClause $join ) {
                        $join->select( 'max_entry.form_id', 'MAX(max_entry.id) AS max_id' )->on_column( 'entry.form_id', 'max_entry.form_id' )->on_column( 'entry.id', 'max_entry.max_id' );
                    }
                )->order_by_desc( 'entry.id' );
            case 'unread':
                return $query->left_join(
                    Entry::get_table_name() . ' as unread_old_entry', function( JoinClause $join ) {
                        $join->select( 'unread_old_entry.form_id', 'MIN(unread_old_entry.created_at) AS old_created_at' )->on_column( 'entry.form_id', 'unread_old_entry.form_id' )->on_column( 'entry.created_at', 'unread_old_entry.old_created_at' );
                    }
                )->order_by_raw(
                    "CASE
                    WHEN entry.is_read = 0 THEN 1
                    WHEN entry.is_read = 1 THEN 2
                    ELSE 3
                END, form.id desc"
                );
            case 'publish':
                return $query->order_by_desc( 'form.status' );
            case 'draft':
                return $query->order_by( 'form.status' );
            case 'date_created':
            default:
                return $query->order_by_desc( 'form.id' );
        }
    } 

    public function create( FormDTO $dto ) {
        return Form::query()->insert_get_id( $dto->to_array() );
    }

    public function update( FormDTO $dto ) {
        $form = $this->get_by_id( $dto->get_id(), [1] );

        if ( ! $form ) {
            throw new Exception( esc_html__( 'Form not found.', 'newform' ), 404 );
        }

        return Form::query()->where( 'id', $dto->get_id() )->update(
            [
                'title'   => $dto->get_title(),
                'status'  => $dto->get_status(),
                'content' => $dto->get_content(),
            ]
        );
    }

    public function update_status( int $form_id, string $status ) {
        return Form::query()->where( 'id', $form_id )->update( [ 'status' => $status ] );
    }

    public function get_by_id( int $id, $columns = ['*'] ) {
        return Form::query()->select( $columns )->where( 'id', $id )->first();
    }

    public function get_by_id_publish( int $id, $columns = ['*'] ) {
        return Form::query()->select( $columns )->where( 'id', $id )->first();
    }

    public function delete_by_id( int $id ) {
        return Form::query()->where( 'id', $id )->delete();
    }
}
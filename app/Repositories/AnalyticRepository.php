<?php

namespace FormGent\App\Repositories;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Models\Response;
use FormGent\App\Models\FormMeta;
use FormGent\WpMVC\Database\Query\JoinClause;

class AnalyticRepository {
    public function form_summary( ?int $form_id = null ) {
        $form_meta_table = FormMeta::get_table_name();

        $total_completion_time_query = <<<SQL
        SUM(
            CASE
                WHEN response.is_completed = '1' THEN TIME_TO_SEC(
                    TIMEDIFF( response.updated_at, response.created_at )
                )
                ELSE 0
            END
        ) AS total_completion_time
SQL;

        $base_query = Response::query( 'response' )
            ->select( 
                [
                    "response.form_id",
                    "COUNT( response.form_id ) AS total_stared",
                    "SUM( CASE WHEN response.is_completed = '1' THEN 1 ELSE 0 END ) AS total_finished",
                    "form_meta.meta_value AS total_views",
                    $total_completion_time_query,
                ]
            )
            ->left_join(
                "{$form_meta_table} as form_meta", function( JoinClause $join ) {
                    $join
                        ->on_column( "response.form_id", "=", "form_meta.form_id" )
                        ->on( "form_meta.meta_key", 'view_count' );
                }
            );

        if ( $form_id ) {
            $base_query->where( 'response.form_id', $form_id );
        }

        $results = $base_query->group_by( 'response.form_id' )->get();

        foreach ( $results as $index => $item ) {
            $average_completion_time = absint( $item->total_finished ) > 0 
                ? absint( $item->total_completion_time ) / absint( $item->total_finished ) 
                : 0;

            $item->average_completion_time = round( $average_completion_time );

            unset( $item->total_completion_time );

            $results[ $index ] = $item;
        }

        return $results;
    }
}
<?php

namespace FormGent\App\Repositories;

defined( 'ABSPATH' ) || exit;

use FormGent\App\Models\Response;
use FormGent\App\Models\PostMeta;
use FormGent\WpMVC\Database\Query\JoinClause;

use stdClass;
use Exception;

class AnalyticRepository {
    public function form_summary( int $form_id ) {
        $meta_table = PostMeta::get_table_name();

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
                    "COUNT( response.form_id ) AS total_stared",
                    "SUM( CASE WHEN response.is_completed = '1' THEN 1 ELSE 0 END ) AS total_finished",
                    "meta.meta_value AS total_views",
                    $total_completion_time_query,
                ]
            )
            ->left_join(
                "{$meta_table} as meta", function( JoinClause $join ) {
                    $join
                        ->on_column( "response.form_id", "=", "meta.post_id" )
                        ->on( "meta.meta_key", '_view_count' );
                }
            );

        $result = $base_query->where( 'response.form_id', $form_id )->group_by( 'response.form_id' )->first();

        if ( ! $result ) {
            return null;
        }

        return $this->transform_summary_item_data( $result );
    }

    private function transform_summary_item_data( stdClass $item ) {
        // Calculate average completion time
        $average_completion_time = absint( $item->total_finished ) > 0 
            ? absint( $item->total_completion_time ) / absint( $item->total_finished ) 
            : 0;

        $item->average_completion_time = round( $average_completion_time );

        unset( $item->total_completion_time );

        return $item;
    }

    /**
     * @throws Exception
     */
    public function update_form_view_count( int $form_id, int $count, $type = '=' ): int {
        $old_count_meta = PostMeta::query()
            ->where( 'post_id', $form_id )
            ->where( 'meta_key', '_view_count' )
            ->first();

        if ( ! $old_count_meta ) {
            $count = $count < 0 || '-' === $type ? 0 : $count;
            $id    = PostMeta::query()->insert_get_id(
                [
                    'post_id'    => $form_id,
                    'meta_key'   => '_view_count',
                    'meta_value' => $count,
                ]
            );

            if ( $id ) {
                return $count;
            }

            throw new Exception( esc_html__( 'Could not update the view count.', 'formgent' ), 403 );
        }

        $type = in_array( $type, [ '=', '+', '-' ] ) ? $type : '=';

        switch ( $type ) {
            case '+':
                $count = absint( $old_count_meta->meta_value ) + $count;
                break;
            case '-':
                $count = absint( $old_count_meta->meta_value ) - $count;
                $count = $count < 0 ? 0 : $count;
                break;
        }

        $status = PostMeta::query()
            ->where( 'post_id', $form_id )
            ->where( 'meta_key', '_view_count' )
            ->update( [  'meta_value' => $count ] );

        if ( false === $status ) {
            throw new Exception( esc_html__( 'Could not update the view count.', 'formgent' ), 403 );
        }

        return $count;
    }
}
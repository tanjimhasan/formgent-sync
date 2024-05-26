<?php

namespace NewForm\App\Repositories;

use NewForm\App\DTO\EntryDTO;
use NewForm\App\DTO\EntryReadDTO;
use NewForm\App\Models\Entry;
use NewForm\App\Models\Form;
use NewForm\WpMVC\Database\Query\Builder;

class EntryRepository {
    public function get( EntryReadDTO $dto ) {
        $entries_query = Entry::query( 'entry' )->left_join( Form::get_table_name() . ' as form', "entry.form_id", "form.id" );

        if ( $dto->get_form_id() ) {
            $entries_query->where( 'entry.form_id', $dto->get_form_id() );
        }

        // $this->forms_date_query( $forms_query, $dto );
        $this->entries_search_query( $entries_query, $dto );

        $count_query = clone $entries_query;

        do_action( 'helpgent_entries_count_query', $count_query, $dto );

        $select_columns = ['entry.id', 'entry.form_id', 'form.title as form_title', 'entry.is_read', 'entry.device', 'entry.browser', 'entry.created_at', 'entry.updated_at'];

        $entries_query->select( $select_columns );

        // $this->forms_sort_query( $forms_query, $dto );

        do_action( 'helpgent_entries_query', $entries_query, $dto );

        return [
            'total'   => $count_query->count(),
            'entries' => $entries_query->pagination( $dto->get_per_page(), $dto->get_page() )
        ];
    }

    private function entries_search_query( Builder $query, EntryReadDTO $dto ) {
        $search = $dto->get_search();

        if ( empty( $search ) ) {
            return $query;
        }

        return $query->where( "form.title", 'like',  "%{$search}%" );
    }

    public function create( EntryDTO $dto ) {
        return Entry::query()->insert_get_id( $dto->to_array() );
    }
}
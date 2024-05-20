<?php

namespace NewForm\App\Repositories;

use NewForm\App\DTO\EntryDTO;
use NewForm\App\Models\Entry;

class EntryRepository {
    public function create( EntryDTO $dto ) {
        return Entry::query()->insert_get_id( $dto->to_array() );
    }
}
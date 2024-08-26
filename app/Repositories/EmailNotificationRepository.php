<?php

namespace FormGent\App\Repositories;

defined( "ABSPATH" ) || exit;

use FormGent\App\DTO\EmailNotificationDTO;
use FormGent\App\Models\EmailNotification;

class EmailNotificationRepository {
    public function get() {
        return EmailNotification::query()->get();
    }

    public function create( EmailNotificationDTO $dto ) {
        return EmailNotification::query()->insert_get_id( $dto->to_array() );
    }
    
    public function update( EmailNotificationDTO $dto ) {
        return EmailNotification::query()->where( 'id', $dto->get_id() )->update( $dto->to_array() );
    }

    public function delete_by_id( int $id ) {
        return EmailNotification::query()->where( 'id', $id )->delete();
    }
}
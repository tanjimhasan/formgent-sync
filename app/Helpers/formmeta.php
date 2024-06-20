<?php

defined( 'ABSPATH' ) || exit;

use FormGent\App\DTO\FormMetaDTO;
use FormGent\App\Repositories\FormMetaRepository;

function formgent_form_meta_repository():FormMetaRepository {
    return formgent_singleton( FormMetaRepository::class );
}

function formgent_add_form_meta( int $form_id, string $meta_key, ?string $meta_value = null ) {
    $dto = new FormMetaDTO;
    $dto->set_form_id( $form_id )->set_meta_key( $meta_key )->set_meta_value( $meta_value );
    return formgent_form_meta_repository()->create( $dto );
}

function formgent_update_form_meta( int $form_id, string $meta_key, ?string $meta_value = null ) {
    $repository = formgent_form_meta_repository();
    
    $dto = new FormMetaDTO;
    $dto->set_form_id( $form_id )->set_meta_key( $meta_key )->set_meta_value( $meta_value );

    $meta = $repository->get_meta( $form_id, $meta_key );

    if ( $meta ) {
        $dto->set_id( $meta->id );
        return $repository->update( $dto );
    }

    return $repository->create( $dto );
}

function formgent_get_form_meta_value( int $form_id, string $meta_key ) {
    return formgent_form_meta_repository()->get_meta_value( $form_id, $meta_key );
}
<?php

namespace FormGent\App\Providers;

defined( "ABSPATH" ) || exit;

use FormGent\WpMVC\Contracts\Provider;
use FormGent\App\Repositories\EmailNotificationRepository;
use FormGent\App\BackgroundProcessors\EmailNotification;
use WP_REST_Request;
use stdClass;

class EmailNotificationServiceProvider implements Provider {
    public EmailNotification $background_process;

    public function boot() {
        $this->background_process = new EmailNotification;

        add_action( "formgent_after_create_form_response", [$this, "after_create_form_response"], 10, 3 );
    }

    public function after_create_form_response( int $response_id, stdClass $form, WP_REST_Request $request ) {
        /**
         * @var EmailNotificationRepository $repository
         */
        $repository = formgent_singleton( EmailNotificationRepository::class );
        $emails     = $repository->get_by_form_id( $form->ID );

        if ( empty( $emails ) ) {
            return;
        }

        $this->background_process->push_to_queue(
            [
                'emails' => $emails
            ] 
        )->save()->dispatch();
    }
}
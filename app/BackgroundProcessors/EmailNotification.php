<?php

namespace FormGent\App\BackgroundProcessors;

defined( "ABSPATH" ) || exit;

class EmailNotification extends CoreBackgroundProcess {
    protected $action = 'email_notification';

    public function task( $item ) {
        if ( empty( $item['emails'] ) ) {
            return false;
        }

        $email = array_shift( $item['emails'] );

        // Build the headers array
        $headers = [
            'Content-Type: text/html; charset=UTF-8'
        ];

        if ( ! empty( $email->cc ) ) {
            $headers[] = 'Cc: ' . $email->cc;
        }

        if ( ! empty( $email->bcc ) ) {
            $headers[] = 'Bcc: ' . $email->bcc;
        }

        if ( ! empty( $email->reply_to ) ) {
            $headers[] = 'Reply-To: ' . $email->reply_to;
        }

        wp_mail( $email->send_to, $email->subject, $email->body, $headers );

        return $item;
    }
}
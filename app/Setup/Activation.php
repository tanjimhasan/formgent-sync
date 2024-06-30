<?php

namespace FormGent\App\Setup;

defined( 'ABSPATH' ) || exit;

use FormGent\Database\Migrations\CreateDB;

class Activation {
    public function __construct() {
        ( new CreateDB )->execute();

        /**
         * Adding formgent slug in wp rewrite rule.
         */
        register_post_type(
            'formgent_form', [
                'rewrite' => ['slug' => 'formgent-form']
            ] 
        );
        flush_rewrite_rules( true );
    }
}
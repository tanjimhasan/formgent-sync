<?php

namespace FormGent\App\Setup;

defined( 'ABSPATH' ) || exit;

use FormGent\Database\Migrations\CreateDB;

class Activation {
    public function __construct() {
        ( new CreateDB )->execute();
    }
}
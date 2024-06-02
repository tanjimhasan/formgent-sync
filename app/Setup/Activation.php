<?php

namespace FormGent\App\Setup;

use FormGent\Database\Migrations\CreateDB;

class Activation {
    public function __construct() {
        ( new CreateDB )->execute();
    }
}
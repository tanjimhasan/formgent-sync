<?php

namespace NewForm\App\Setup;

use NewForm\Database\Migrations\CreateDB;

class Activation {
    public function __construct() {
        ( new CreateDB )->execute();
    }
}
<?php

namespace FormGent\App\Exceptions;

use Exception;
use Throwable;

class RequestValidatorException extends Exception {
    private $messages = [];

    /**
     * @param array $message
     * @param integer $code
     * @param Throwable|null $previous
     */
    public function __construct( array $messages = [], int $code = 422, $previous = null ) { 
        parent::__construct( "", $code, $previous );
        $this->messages = $messages; 
    }

    public function get_messages() {
        return $this->messages;
    }
}
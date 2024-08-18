<?php

namespace FormGent\App\Fields\Address;

defined( 'ABSPATH' ) || exit;

use FormGent\App\DTO\AnswerDTO;
use FormGent\WpMVC\RequestValidator\Validator;
use WP_REST_Request;
use stdClass;

trait MethodResolver {
    public static function get_key(): string {
        return 'address';
    }

    protected function get_validation_rules(): array {
        return [];
    }

    public function validate( array $field, WP_REST_Request $wp_rest_request, Validator $validator ) {}

    public function get_field_dto( array $field, WP_REST_Request $wp_rest_request, stdClass $form ): AnswerDTO {
        $dto = new AnswerDTO();
        return $dto->set_form_id( $form->ID )->set_field_type( $field['field_type'] )->set_field_name( $field['name'] );
    }
}

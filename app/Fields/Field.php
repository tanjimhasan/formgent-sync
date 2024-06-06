<?php

namespace FormGent\App\Fields;

defined( 'ABSPATH' ) || exit;

use FormGent\App\DTO\FieldDTO;
use FormGent\App\EnumeratedList\FormType;
use FormGent\App\Exceptions\RequestValidatorException;
use FormGent\App\Repositories\FieldRepository;
use FormGent\WpMVC\RequestValidator\Validator;
use stdClass;
use WP_REST_Request;

abstract class Field {
    public FieldRepository $field_repository;

    public $has_children = false;

    public function __construct( FieldRepository $field_repository ) {
        $this->field_repository = $field_repository;
    }

    abstract public static function get_key(): string;

    public static function get_supported_form_types(): array {
        return [FormType::GENERAL, FormType::CONVERSATIONAL];
    }

    public function validate( array $field, WP_REST_Request $wp_rest_request, Validator $validator ) {
        $rules = [];

        if ( '1' === formgent_get_nested_value( "general_option.validations.required.value", $field ) ) {
            $rules[] = 'required|string';
        }

        if ( ! empty( $rules ) ) {

            $validator->validate(
                [
                    $field['name'] => implode( '|', $rules ),
                ]
            );
                
            static::throw_validator_errors( $validator );
        }
    }

    public function get_field_dto( array $field, WP_REST_Request $wp_rest_request, stdClass $form ): FieldDTO {
        $dto = new FieldDTO();
        return $dto->set_form_id( $form->id )->set_field_type( $field['type'] )->set_field_id( $field['id'] )->set_value( $wp_rest_request->get_param( static::get_key() ) );
    }
 
    public function get_children_dtos( array $field, WP_REST_Request $wp_rest_request, stdClass $form ): array {
        return [];
    }

    protected static function throw_validator_errors( Validator $validator ) {
        if ( $validator->is_fail() ) {
            $errors            = $validator->errors;
            $validator->errors = [];
            static::throw_errors( $errors );
        }
    }

    protected static function throw_errors( array $errors ) {
        throw new RequestValidatorException( $errors, 422, null );
    }
}
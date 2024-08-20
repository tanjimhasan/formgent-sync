<?php

namespace FormGent\App\Summary;

defined( 'ABSPATH' ) || exit;

use stdClass;
use FormGent\App\EnumeratedList\SummaryType;

trait HasOne {

    use Summary;

    public static function summary_type(): string {
        return SummaryType::HASONE;
    }

    protected function get_answers( stdClass $form, array $field, int $page, int $per_page ) {
        return $this->query( $form->ID, $field['id'], $field['field_type'] )->select( 'id, value' )->with( $field['field_type'] )->pagination( $per_page, $page );
    }

    protected function get_field_summary( stdClass $form, array $field, int $page, int $per_page ) {
        return $this->get_answers( $form, $field, $page, $per_page );
    }

    public function get_summary( stdClass $form, array $field, int $page = 0, int $per_page = 0 ) {
        return apply_filters( "helpgent_has_one_summary", $this->get_field_summary( $form, $field, $page, $per_page ), $field, $form );
    }
}


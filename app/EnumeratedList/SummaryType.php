<?php

namespace FormGent\App\EnumeratedList;

defined( 'ABSPATH' ) || exit;

class SummaryType {
    const PAGINATION  = 'pagination';
    const MULTISELECT = 'multi_select';
    const CHART       = 'chart';
    const HASONE      = 'has_one';
    const HASCHILD    = 'has_child';
    const CUSTOM      = 'custom';
}
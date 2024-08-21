<?php

namespace FormGent\App\EnumeratedList;

defined( 'ABSPATH' ) || exit;

class SummaryType {
    const PAGINATION = 'pagination';
    const CHART      = 'chart';
    const SELECT     = 'select';
    const HASONE     = 'has_one';
    const HASCHILD   = 'has_child';
    const CUSTOM     = 'custom';
}
<?php

namespace FormGent\Database\Migrations;

use FormGent\WpMVC\Contracts\Migration;

class CreateDB implements Migration {
    public function more_than_version() {
        return '1.0.0';
    }

    public function execute(): bool {
        global $wpdb;

        $charset_collate = $wpdb->get_charset_collate();

        if ( ! function_exists( 'dbDelta' ) ) {
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        }

        $db_prefix = "{$wpdb->prefix}formgent_";

        
        // -- -----------------------------------------------------
        // -- Table forms
        // -- -----------------------------------------------------

        $sql = "CREATE TABLE {$db_prefix}forms (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `title` VARCHAR(255) NOT NULL,
            `status` VARCHAR(50) NOT NULL DEFAULT 'draft' COMMENT 'value: publish/draft',
            `type` VARCHAR(50) NOT NULL DEFAULT 'general',
            `save_incomplete_data` TINYINT NOT NULL DEFAULT 0 COMMENT 'value: 0/1',
            `content` LONGTEXT NOT NULL,
            `created_by` BIGINT UNSIGNED NOT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table form meta
        -- -----------------------------------------------------

        CREATE TABLE {$db_prefix}form_meta (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `form_id` BIGINT UNSIGNED NOT NULL,
            `meta_key` VARCHAR(255) NOT NULL,
            `meta_value` LONGTEXT DEFAULT '',
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table entries
        -- -----------------------------------------------------

        CREATE TABLE {$db_prefix}entries (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `form_id` BIGINT UNSIGNED NOT NULL,
            `is_read` TINYINT NOT NULL DEFAULT 0 COMMENT 'value: 0/1',
            `is_completed` TINYINT NOT NULL DEFAULT 0 COMMENT 'value: 0/1',
            `ip` VARCHAR(50) NULL,
            `device` VARCHAR(50) NULL,
            `browser` VARCHAR(50) NULL,
            `browser_version` VARCHAR(50) NULL,
            `created_by` BIGINT UNSIGNED NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`)
        ) {$charset_collate};

        -- -----------------------------------------------------
        -- Table fields
        -- -----------------------------------------------------

        CREATE TABLE {$db_prefix}fields (
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            `entry_id` BIGINT UNSIGNED NOT NULL,
            `field_id` VARCHAR(50) NOT NULL,
            `parent_id` BIGINT UNSIGNED NULL,
            `form_id` BIGINT UNSIGNED NOT NULL,
            `value` LONGTEXT NULL,
            `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`)
        ) {$charset_collate};
        ";

        dbDelta( $sql );

        return true;
    }
}
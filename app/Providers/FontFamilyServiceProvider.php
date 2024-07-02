<?php

namespace FormGent\App\Providers;

defined( 'ABSPATH' ) || exit;

use FormGent\App\BackgroundProcessors\FontFamily;
use FormGent\WpMVC\Contracts\Provider;
use FormGent\App\DTO\FormDTO;

class FontFamilyServiceProvider implements Provider {
    public FontFamily $background_process;

    public function boot() {
        $this->background_process = new FontFamily;

        // add_action( 'formgent_after_update_form', [$this, 'download_font_family'] );
    }

    public function download_font_family( FormDTO $dto ) {
        $font_family = $dto->get_font_family();

        if ( empty( $font_family ) ) {
            return;
        }

        $fonts = json_decode( file_get_contents( formgent_dir( 'app/fonts.json' ) ), true );

        if ( empty( $fonts[$font_family]['files'] ) ) {
            return;
        }

        $font_files = $fonts[$font_family]['files'];

        $directory = formgent_font_family_dir();

        foreach ( $font_files as $weight => $file ) {
            $file_name = $directory . "{$font_family}/{$weight}.woff";

            if ( ! is_file( $file_name ) ) {
                $this->background_process->push_to_queue(
                    [
                        'font_family' => $font_family,
                        'type'        => 'download'
                    ] 
                )->save()->dispatch();
                break;
            }
        }
    }
}
<?php

namespace FormGent\App\BackgroundProcessors;

defined( 'ABSPATH' ) || exit;

class FontFamily extends CoreBackgroundProcess {
    protected $action = 'font_family';

    public function task( $item ) {
        $font_family = $item['font_family'];
        $directory   = formgent_font_family_dir( $font_family );

        if ( ! is_dir( $directory ) ) {
            mkdir( $directory, 0777, true );
        }

        switch ( $item['type'] ) {
            case 'download':
                $fonts      = json_decode( file_get_contents( formgent_dir( 'app/fonts.json' ) ), true );
                $font_files = $fonts[$font_family]['files'];

                foreach ( $font_files as $variation => $variations ) {
                    foreach ( $variations as $extension => $url ) {
                        $file_name = $directory . '/' . $variation . '.' . $extension ;
    
                        if ( ! is_file( $file_name ) ) {

                            /**
                             * Download font family
                             */
                            $font = wp_remote_get( $url );
                        
                            if ( 200 === wp_remote_retrieve_response_code( $font ) ) {
                            
                                /**
                                 * Create font family file
                                 */
                                $font_stream = fopen( $file_name, 'w' );
                                fwrite( $font_stream, wp_remote_retrieve_body( $font ) );
                                fclose( $font_stream );
                            }
                        }
                    }
                }
                break;
            default:
                break;
        }
        return false;
    }
}
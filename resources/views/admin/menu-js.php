<?php defined( 'ABSPATH' ) || exit;?>
<script>
    /**
     * Written menu activation js code in PHP file to avoid menu activation delay.
     */
    jQuery(($) => {
        /**
         * Add first menu hash url
         */
        $('.toplevel_page_formgent-menu a.wp-first-item').attr('href', (index, href) => href + '#/forms');

        /**
         * Active menu on page load
         */
        var cleanHash = window.location.hash.substring(2).split('/')[0];

        if( cleanHash.length !== 0 ) {
            var path = window.location.href.split('#')[0].split('?')[1] + "#/" + cleanHash;
            let current_page = $('.wp-submenu a[href*="' + path + '"]');
            formgent_set_current_page(current_page);
        }

        /**
         * Active menu onclick
         */
        $('.toplevel_page_formgent-menu .wp-submenu a').on('click', function (event) {
            let current_page = $(this);
            if(current_page[0].href === '<?php formgent_render( $pro_url )?>') {
                event.preventDefault();
                window.open('<?php formgent_render( $pro_url )?>', '_blank');
            } else {
                formgent_set_current_page(current_page);
            }
        })

        function formgent_set_current_page(current_page) {
            current_page.closest('.wp-submenu').find('.current').removeClass('current');
            current_page.addClass('current');
            current_page.closest('li').addClass('current');
        }
    });
</script>

<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>

<?php defined( 'ABSPATH' ) || exit;?>
<h1>FormGent Form</h1>
<?php 

$data = formgent_get_form_field_settings( parse_blocks( $form->post_content ) );
echo "<pre>";
print_r( $data );
echo "</pre>";
$data_json = wp_json_encode( $data );
// Generate unique id for aria-controls.
$unique_id = str_replace( '-', '_', wp_unique_id( 'formgent-store' ) );
// echo esc_html($data['label']);
// echo esc_attr( $unique_id );
?>
<form
    id="formgent-<?php formgent_render( $unique_id ) ?>"
    <?php formgent_render( get_block_wrapper_attributes() ); ?>
    data-wp-interactive="formgent-block"
    data-wp-context='{"email": ""}'
>
    <?php formgent_render( $fields )?>
</form>

<script>

    function formgent_form<?php formgent_render( $unique_id )?>() {
        //Getting data from php variable
        const formOptions = <?php formgent_render( $data_json ); ?>;

        //Inititalize validation form
        const validation = new window.JustValidate('#formgent-<?php formgent_render( $unique_id ) ?>', {validateBeforeSubmitting: true});

        let rulesList = {
            email: function( rules) {
                rules.push({
                    rule: 'email',
                    errorMessage: 'Email is invalid!',
                });
            }
        }
        //Loop over each field & prepare validation group
        Object.keys(formOptions).forEach(key => {
            const field = formOptions[key];
            const selector = `#${field.name}`;
            const rules = [];

            if(field.required){
                rules.push({
                    rule: 'required',
                    errorMessage: `${field.label} is required`,
                })
            }

            rulesList[field_type](rules);

            validation.addField( selector,rules );

        });
    }

    formgent_form<?php formgent_render( $unique_id )?>();

    
</script>
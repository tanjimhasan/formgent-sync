<?php defined( 'ABSPATH' ) || exit;

wp_enqueue_script( 'wp-api-fetch' );
wp_enqueue_script( 'formgent/just-validate' );

$data  = formgent_get_form_field_settings( parse_blocks( $form->post_content ) );
$names = array_map(
    function( $item ) {
        return isset( $item['value'] ) ? $item['value'] : '';
    }, $data
);

$names_json = wp_json_encode( $names );
$unique_id  = str_replace( '-', '_', wp_unique_id( 'formgent-store' ) );

?>
<h1>FormGent Form</h1>
<div class="formgent-form-submisison">
    <form
        id="formgent-<?php formgent_render( $unique_id ) ?>"
        <?php formgent_render( get_block_wrapper_attributes() ); ?>
        data-wp-interactive="formgent-block"
        data-wp-context='<?php formgent_render( $names_json ); ?>'
    >
        <div class="formgent-notices"></div>
        <?php formgent_render( $fields )?>
        <button type="submit" class="formgent-btn formgent-primary formgent-btn-md">Submit</button>
    </form>
</div>

<script>
    (() => {
        //Getting data from php variable
        const formOptions = <?php formgent_render( wp_json_encode( $data ) ); ?>;

        //Inititalize validation form
        const validation = new window.JustValidate('#formgent-<?php formgent_render( $unique_id ) ?>');

        let rulesList = {
            email: function( rules ) {
                rules.push({
                    rule: 'email',
                    errorMessage: 'Email is invalid!',
                });
            }
        }

        //Loop over each field & prepare validation group
        Object.values(formOptions).map((item, index) => {
            const field = formOptions[item.name];
            const selector = `#${field.name}`;
            const rules = [];

            //General validation rules
            if(field.required){
                rules.push({
                    rule: 'required',
                    errorMessage: `${field.label} is required`,
                })
            }

            // Type specific validation rules
            if(rulesList[item.field_type]){
                rulesList[item.field_type](rules);
            }

            if(rules.length < 1){
                return;
            }

            validation.addField( selector,rules ).onSuccess( (event) => {
                event.preventDefault();
                document.dispatchEvent(new CustomEvent('formgent/submit', {
                    detail: {
                        formId: <?php formgent_render( $form->ID );?>,
                        names: <?php formgent_render( $names_json ); ?>,
                        form: event.target 
                    }
                }));  
            });
        });
    })();
</script>
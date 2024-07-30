<?php defined( 'ABSPATH' ) || exit;

wp_enqueue_script( 'wp-api-fetch' );
wp_enqueue_script( 'formgent/just-validate' );

$data      = formgent_get_form_field_settings( parse_blocks( $form->post_content ) );
$form_data = array_map(
    function( $item ) {
        return isset( $item['value'] ) ? $item['value'] : '';
    }, $data
);

$unique_id = str_replace( '-', '_', wp_unique_id( 'formgent-store' ) );

$context = [
    'formId'         => $form->ID,
    'blocksSettings' => $data,
    'data'           => $form_data,
];

?>
<h1>FormGent Form</h1>
<div class="formgent-form">
    <form
        id="formgent-<?php formgent_render( $unique_id ) ?>"
        <?php formgent_render( get_block_wrapper_attributes() ); ?>
        data-wp-interactive="formgent/form"
        data-wp-context='<?php formgent_render( wp_json_encode( $context ) ); ?>'
    >
        <div class="formgent-notices"></div>
        <div class="formgent-submit" data-wp-on--click="actions.submit"></div>
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
                event.target.querySelector(".formgent-submit").click()
            });
        });
    })();
</script>
<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>

<?php defined( 'ABSPATH' ) || exit;?>
<h1>FormGent Form</h1>
<?php 

$data  = formgent_get_form_field_settings( parse_blocks( $form->post_content ) );
$names = array_map(
    function( $item ) {
        return isset( $item['value'] ) ? $item['value'] : '';
    }, $data
);

$data_json  = wp_json_encode( $data );
$names_json = wp_json_encode( $names );

// Generate unique id for aria-controls.
$unique_id = str_replace( '-', '_', wp_unique_id( 'formgent-store' ) );

?>
<div class="formgent-form-submisison">
    <div class="formgent-notice" id="<?php formgent_render( $unique_id ) ?>-submission-notice"></div>
    <form
        id="formgent-<?php formgent_render( $unique_id ) ?>"
        <?php formgent_render( get_block_wrapper_attributes() ); ?>
        data-wp-interactive="formgent-block"
        data-wp-context='<?php formgent_render( $names_json ); ?>'
    >
        <?php formgent_render( $fields )?>
        <button type="submit" class="formgent-btn formgent-primary formgent-btn-md">Submit</button>
    </form>
</div>

<script>
    
    function formgent_form<?php formgent_render( $unique_id )?>() {
        //Getting data from php variable
        const formOptions = <?php formgent_render( $data_json ); ?>;

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

            validation
                .addField( selector,rules )
                .onSuccess( async(event) => {
                    event.preventDefault();
                    const formId = <?php formgent_render( $form->ID );?>;
                    const names = <?php formgent_render( $names_json ); ?>;
                    const form = event.target;
                    const formData = new FormData(form);
                    const rowData = {};

                    for(const name of Object.keys(names)){
                        const inputElement = form.querySelector(`[name="${name}"]`);
                        const inputType = inputElement ? inputElement.type : null;

                        if(inputType === 'number') {
                            rowData[name] = parseInt(formData.get(name), 10);
                        }else {
                            rowData[name] = formData.get(name);
                        }
                    }

                    const submissionData = {
                        id: parseInt(formId),
                        form_data: {
                            ...rowData
                        }
                    }

                    try {
                        const response = await fetch('/wp-json/formgent/responses', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(submissionData),
                        });
                        const data = await response.json();
                        const noticeContainer = document.getElementById('<?php formgent_render( $unique_id ) ?>-submission-notice');
                        noticeContainer.innerHTML = `
                            <span>${data.message}</span>
                        `
                        form.reset();
                        
                        
                    } catch (error) {
                        console.error('Error:', error);
                    }
                });

        });
    }

    formgent_form<?php formgent_render( $unique_id )?>();
    
    
</script>
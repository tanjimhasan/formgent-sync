import { now } from "@newform/helper/now";

const LongText = {
    id: now(),
    type: 'long_text',
    group_name: 'general',
    general_option:{
        label: 'Long text',
        placeholder: '',
        row: '',
        cols: '',
        validations: {
            required: {
                value: '0',
                message: "This field is required",
                global_message: "This field is required"
            }
        }
    },
    advance_option: {
        default_value: "",
        container_class: "",
        field_class: "",
        name: "long_text",
        max_length: "",
        logics: {
            is_advance_logic_active: '0'
        }
    }
}

export default LongText;
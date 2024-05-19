import { applyFilters } from '@wordpress/hooks';

import LongTextField from "./components/fieldList/LongText/field.js";
import ShortTextField from "./components/fieldList/ShortText/field.js";

function registerFields(){
    return applyFilters('newform_fields', [
        LongTextField,
        ShortTextField
    ])
}

export { registerFields };
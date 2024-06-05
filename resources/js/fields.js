import { applyFilters } from '@wordpress/hooks';

/**
 * Preview of fields
 */
import LongText from './components/fieldList/LongText/index.js';
import ShortText from './components/fieldList/ShortText/index.js';
import Name from './components/fieldList/Name/index.js';
import Spacer from './components/fieldList/Spacer/index.js';

/**
 * Setting Json of fields
 */
import LongTextField from './components/fieldList/LongText/field.js';
import ShortTextField from './components/fieldList/ShortText/field.js';
import NameField from './components/fieldList/Name/field.js';

/**
 * @returns {Object} An object containing the preview fields with applied filters.
 */
function registerPreviewFields() {
	return applyFilters( 'formgent_preview_fields', {
		long_text: LongText,
		short_text: ShortText,
		name: Name,
		spacer: Spacer,
	} );
}

/**
 * @returns {Object} An object containing the field JSON with applied filters.
 */
function registerFields() {
	return applyFilters( 'formgent_fields', [
		LongTextField,
		ShortTextField,
		NameField,
	] );
}

export { registerPreviewFields, registerFields };

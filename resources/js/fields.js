import { applyFilters } from '@wordpress/hooks';

/**
 * Preview of fields
 */
import LongText from './components/fieldList/LongText/index.js';
import ShortText from './components/fieldList/ShortText/index.js';
import Spacer from './components/fieldList/Spacer/index.js';

/**
 * Setting Json of fields
 */
import LongTextField from './components/fieldList/LongText/field.js';
import ShortTextField from './components/fieldList/ShortText/field.js';

/**
 * @returns {Object} An object containing the preview fields with applied filters.
 */
function registerPreviewFields() {
	return applyFilters( 'newform_preview_fields', {
		long_text: LongText,
		short_text: ShortText,
		spacer: Spacer,
	} );
}

/**
 * @returns {Object} An object containing the field JSON with applied filters.
 */
function registerFields() {
	return applyFilters( 'newform_fields', [ LongTextField, ShortTextField ] );
}

console.log( LongTextField, ShortTextField );

export { registerPreviewFields, registerFields };

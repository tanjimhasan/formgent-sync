import { applyFilters } from '@wordpress/hooks';
import chartBar from '@icon/chart-bar.svg';
import bar from '@icon/bar.svg';
import user from '@icon/user.svg';
import mail from '@icon/mail.svg';

/**
 * Preview of fields
 */
import LongText from './components/fieldList/LongText/index.js';
import ShortText from './components/fieldList/ShortText/index.js';
import Names from './components/fieldList/Names/index.js';
import Email from './components/fieldList/Email/index.js';
import SubmitButton from './components/fieldList/SubmitButton/index.js';
import Spacer from './components/fieldList/Spacer/index.js';

/**
 * Setting Json of fields
 */
import LongTextField from './components/fieldList/LongText/field.js';
import ShortTextField from './components/fieldList/ShortText/field.js';
import NamesField from './components/fieldList/Names/field.js';
import EmailField from './components/fieldList/Email/field.js';
import SubmitButtonField from './components/fieldList/SubmitButton/field.js';
import InputControl from './components/FieldControls/InputControl.js';
import SwitchControl from './components/FieldControls/SwitchControl.js';
import SelectControl from './components/FieldControls/SelectControl.js';

/**
 * @returns {Object} An object containing the preview fields with applied filters.
 */
function registerPreviewFields() {
	return applyFilters( 'formgent_preview_fields', {
		long_text: LongText,
		short_text: ShortText,
		names: Names,
		email: Email,
		submit_button: SubmitButton,
		spacer: Spacer,
	} );
}

/**
 * @returns {Object} An object containing the field JSON with applied filters.
 */
function registerFields() {
	return applyFilters( 'formgent_fields', [
		{
			title: 'Long text',
			group: 'basic',
			icon: chartBar,
			fieldObj: LongTextField,
		},
		{
			title: 'Short text',
			group: 'basic',
			icon: bar,
			fieldObj: ShortTextField,
		},
		{
			title: 'Name Fields',
			group: 'basic',
			icon: user,
			fieldObj: NamesField,
		},
		{
			title: 'Email',
			group: 'basic',
			icon: mail,
			fieldObj: EmailField,
		},
		{
			title: 'Submit button',
			group: 'submit',
			icon: null,
			fieldObj: SubmitButtonField,
		},
	] );
}

function registerControls() {
	return applyFilters( 'formgent_controls', {
		input: ( props ) => {
			return <InputControl { ...props } />;
		},
		switch: ( props ) => {
			return <SwitchControl { ...props } />;
		},
		select: ( props ) => {
			return <SelectControl { ...props } />;
		},
	} );
}

export { registerPreviewFields, registerFields, registerControls };

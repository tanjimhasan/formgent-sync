import { AntSelect } from '@formgent/components';
import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import countries from './countries';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const countryOptions = countries.map( ( country ) => {
		return {
			label: <ReactSVG src={ country.flag } />,
			value: country.dial_code,
			name: country.name,
		};
	} );

	const [ selectedCountry, setSelectedCountry ] = useState(
		countryOptions[ 18 ]
	);

	return (
		<div className="block-editor-block-list__single">
			<label
				className={ `block-editor-block-list__single__label label-align-${ attributes.label_alignment }` }
			>
				{ attributes.label }
				{ attributes.required ? (
					<span className="block-editor-block-list__single__label__required">
						*
					</span>
				) : null }
			</label>
			<div className="block-editor-block-list__single__wrapper">
				<div className="block-editor-block-list__single__dialer">
					<AntSelect
						options={ countryOptions }
						defaultValue={ selectedCountry }
						className="formgent-select formgent-select--flag"
						onChange={ () => {} }
					/>
					<span className="block-editor-block-list__single__dialer__code">
						({ selectedCountry.value })
					</span>
					<input
						className="block-editor-block-list__single__dialer__input"
						type="text"
						name={ attributes.name }
						placeholder={ attributes.placeholder }
						value={ attributes.value }
						onChange={ () => {} }
					/>
				</div>
				<span className="block-editor-block-list__single__sub-label">
					{ attributes.sub_label }
				</span>
			</div>
		</div>
	);
}

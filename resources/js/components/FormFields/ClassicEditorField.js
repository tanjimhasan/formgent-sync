import { Form, Button } from 'antd';
import ClassicEditor from '@wpmvc/classic-editor';
import PresetDropdown from './PresetDropdown';

import { useRef, useEffect } from '@wordpress/element';

const PresetButton = ( props ) => {
	const { buttonLabel, onInsert, items } = props;

	return (
		<PresetDropdown items={ items } onInsert={ onInsert }>
			<Button type="primary">
				{ buttonLabel
					? buttonLabel
					: __( 'Preset Fields', 'formgent' ) }
			</Button>
		</PresetDropdown>
	);
};

export default function ClassicEditorField( props ) {
	const { value, onChange, presetFields, presetButtonLabel } = props;
	const { status } = Form.Item.useStatus();

	const hasPresetFields = presetFields && presetFields.length ? true : false;

	const editorRef = useRef();
	const presetFieldRef = useRef();

	useEffect( () => {
		if ( hasPresetFields && presetFieldRef.current ) {
			const editorTabs =
				editorRef.current.querySelector( '.wp-editor-tabs' );
			editorTabs.append( presetFieldRef.current );
		}
	}, [] );

	return (
		<div
			className={ `formgent-form-input formgent-form-input-${ status }` }
		>
			<div ref={ editorRef }>
				{ hasPresetFields && (
					<div
						style={ { display: 'inline-block' } }
						ref={ presetFieldRef }
					>
						<PresetButton
							parentRef={ editorRef }
							buttonLabel={ presetButtonLabel }
							value={ value }
							onInsert={ ( preset ) => {
								if ( typeof onChange === 'function' ) {
									onChange(
										`${ value ? value : '' }${ preset }`
									);
								}
							} }
							items={ presetFields }
						/>
					</div>
				) }

				<ClassicEditor
					{ ...props }
					height={ 300 }
					hasMedia={ true }
					useExtendStyles={ true }
				/>
			</div>
		</div>
	);
}

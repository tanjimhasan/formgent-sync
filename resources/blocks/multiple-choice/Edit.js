import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	function handleClick( e ) {
		e.preventDefault(); // Prevents the default action
		e.stopPropagation(); // Stops the event from propagating
	}

	return (
		<div className="formgent-editor-block-list__single">
			<div
				className={ `formgent-editor-block-list__single__label-container formgent-label-align-${ attributes.label_alignment }` }
			>
				<RichText
					className="formgent-editor-block-list__single__label"
					tagName="label"
					value={ attributes.label }
					onChange={ ( content ) =>
						setAttributes( { label: content } )
					}
					placeholder={ __( 'Select your choice' ) }
				/>
				{ attributes.required ? (
					<span className="formgent-editor-block-list__single__label__required">
						*
					</span>
				) : null }
			</div>
			<div className="formgent-editor-block-list__single__wrapper formgent-editor-block-list__single__wrapper--multi-choice">
				<div className="formgent-editor-block-list__single__box">
					{ attributes.options.length > 0 ? (
						attributes.options.map( ( option, index ) => (
							<div
								key={ index }
								className="formgent-editor-block-list__single__box__choice"
							>
								<input
									className="formgent-editor-block-list__single__input formgent-editor-block-list__single__input--checkbox"
									type="checkbox"
									id={ option.id }
									name={ attributes.name }
									value={ option.value }
									checked={
										attributes.value === option.value
									}
									onChange={ () => {} }
									onClick={ ( e ) => handleClick( e ) }
								/>
								<label
									htmlFor={ option.id }
									className="formgent-editor-block-list__single__label"
								>
									<span className="formgent-editor-block-list__single__checkbox">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="#fff"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</span>
									{ option.label }
								</label>
							</div>
						) )
					) : (
						<div className="formgent-editor-block-list__single__box__choice">
							<input
								className="formgent-editor-block-list__single__input formgent-editor-block-list__single__input--checkbox"
								type="checkbox"
								id="formgent-default-checkbox"
								name={ attributes.name }
								value={
									attributes.value ||
									'formgent-default-option'
								}
								onChange={ () => {} }
								onClick={ ( e ) => handleClick( e ) }
							/>
							<label
								htmlFor="formgent-default-checkbox"
								className="formgent-editor-block-list__single__label"
							>
								<span className="formgent-editor-block-list__single__checkbox">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="#fff"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</span>
								{ __( 'Choose Default', 'formgent' ) }
							</label>
						</div>
					) }
				</div>
				<span className="formgent-editor-block-list__single__sub-label">
					{ attributes.sub_label }
				</span>
			</div>
		</div>
	);
}
